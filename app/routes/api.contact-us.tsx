import { sendEmail } from "~/api/emails/index.server";
import { logger } from "~/utils/server/index.server";
import { data } from "react-router";
import { type ActionFunctionArgs } from "react-router";
import { verifyRecaptcha } from "~/utils/server/recaptcha.server";


function sanitizeString(input: string) {
  // Use a basic method to sanitize: strip out any non-alphanumeric characters, except for spaces.
  // This will not be enough for fields like email, so specific sanitization should be done for them.
  return input?.replace(/[^a-z0-9 ]/gi, "");
}

function sanitizePhone(phone: string) {
  // Remove any non-numeric characters
  return phone?.replace(/\D/g, "");
}

function sanitizeEmail(input: string) {
  // A very basic validation and sanitization:
  // 1. Trim spaces.
  // 2. Convert to lowercase.
  // 3. Ensure it contains an "@" and a "." character.
  const trimmed = input.trim().toLowerCase();
  if (trimmed.includes("@") && trimmed.includes(".")) {
    return trimmed;
  } else {
    throw new Error("Invalid email format");
  }
}

export async function action({
  request,
}: ActionFunctionArgs): Promise<Response> {
  try {
    const body = await request.formData();
    logger.log(body, "<<< body");

    // Verify reCAPTCHA if token is present
    const recaptchaToken = body.get('recaptcha_token') as string;
    const hasSecretKey = !!process.env.RECAPTCHA_SECRET_KEY;
    
    logger.log(`reCAPTCHA Debug - Token present: ${!!recaptchaToken}, Secret key present: ${hasSecretKey}`);
    
    if (recaptchaToken && hasSecretKey) {
      logger.log('Verifying reCAPTCHA token...');
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      
      if (!recaptchaResult.success) {
        logger.warn(`reCAPTCHA verification failed: ${recaptchaResult.error}`);
        // In development, allow it to proceed even if reCAPTCHA fails
        if (process.env.NODE_ENV === 'development') {
          logger.warn('Development mode: allowing request despite reCAPTCHA failure');
        } else {
          return data({
            ok: false,
            message: "Spam protection verification failed. Please try again.",
          });
        }
      } else {
        logger.log(`reCAPTCHA verified with score: ${recaptchaResult.score}`);
      }
    } else if (!hasSecretKey) {
      logger.warn('RECAPTCHA_SECRET_KEY not configured, skipping reCAPTCHA verification');
    } else {
      logger.warn('No reCAPTCHA token provided but secret key is configured - proceeding anyway in development');
    }

    // parse request
    const [
      firstName,
      lastName,
      email,
      message,
      source,
      phone,
      jobTitle,
      company,
      message2,
    ] = [
      "firstName",
      "lastName",
      "email",
      "message",
      "source",
      "phone",
      "jobTitle",
      "company",
      "message2",
    ].map((field) => {
      const rawValue = body.get(field) as string;
      if (field === "email") {
        return sanitizeEmail(rawValue);
      } else if (field === "phone") {
        return sanitizePhone(rawValue);
      } else {
        return sanitizeString(rawValue);
      }
    });

    // NOTE: ADDRESS IS A HONEYPOT honey pot. If the user added a field then
    // it is a bot. We will not send an email and return a 200 status code
    if (!message2) {
      await sendEmail({
        firstName,
        lastName,
        email,
        message,
        source: `${source}`,
        phone,
        jobTitle,
        company,
      });
    }
    return data({
      ok: true,
      message: "Message sent successfully! We'll be in touch soon.",
    });
  } catch (e) {
    logger.error(e, "<<< e from contact-us");
    return data({
      ok: false,
      message: "There was an error sending your message. Please try again.",
    });
  }
}
