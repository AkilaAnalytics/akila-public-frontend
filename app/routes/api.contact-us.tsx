import { sendEmail } from "~/api/emails/index.server";
import { logger } from "~/utils/server/index.server";
// import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import { data } from "react-router";
import { type ActionFunctionArgs } from "react-router";

// const recaptchaenterpriseClient = new RecaptchaEnterpriseServiceClient();

// TODO: Implement reCAPTCHA assessment when needed
/*
async function createAssessment({
  projectID,
  recaptchaKey,
  token,
  recaptchaAction,
}) {
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);
  const request = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };
  const [response] = await client.createAssessment(request);
  // ... reCAPTCHA logic here
  return response.riskAnalysis.score;
}
*/

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
      console.log(rawValue, "<<< rawValue");
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
    console.log(e, "<<< e from contact-us");
    return data({
      ok: false,
      message: "There was an error sending your message. Please try again.",
    });
  }
}
