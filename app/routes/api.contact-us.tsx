import { sendEmail } from "~/api/emails/index.server";
import { logger } from "~/utils";
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import { data } from "react-router";
import { type ActionFunctionArgs } from "react-router";

const recaptchaenterpriseClient = new RecaptchaEnterpriseServiceClient();

/**
 * Create an assessment to analyze the risk of a UI action.
 *
 * projectID: Your Google Cloud Project ID.
 * recaptchaSiteKey: The reCAPTCHA key associated with the site/app
 * token: The generated token obtained from the client.
 * recaptchaAction: Action name corresponding to the token.
 */
async function createAssessment({
  // TODO: Replace the token and reCAPTCHA action variables before running the sample.
  projectID,
  recaptchaKey,
  token,
  recaptchaAction,
}) {
  // Create the reCAPTCHA client.
  // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  // Build the assessment request.
  const request = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };

  //const [response] = await client.createAssessment(request);
  logger.log(response, "<<< response");

  // Check if the token is valid.
  if (!response.tokenProperties.valid) {
    console.log(
      `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
    );
    return null;
  }

  // Check if the expected action was executed.
  // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
  if (response.tokenProperties.action === recaptchaAction) {
    // Get the risk score and the reason(s).
    // For more information on interpreting the assessment, see:
    // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
    console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
    response.riskAnalysis.reasons.forEach((reason) => {
      console.log(reason);
    });

    return response.riskAnalysis.score;
  } else {
    console.log(
      "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
    );
    return null;
  }
}

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
    });
  } catch (e) {
    console.log(e, "<<< e from contact-us");
    return data({
      ok: false,
    });
  }
}
