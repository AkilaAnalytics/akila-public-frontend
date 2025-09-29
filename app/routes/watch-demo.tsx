import type { Route } from "./+types/home";
import type { ActionFunctionArgs } from "react-router";
import { sendEmail } from "~/api/emails/index.server";
import { logger } from "~/utils/server/index.server";
import { data } from "react-router";

export { WatchDemo as default } from "~/view/pages";

function sanitizeString(input: string) {
  return input?.replace(/[^a-z0-9 ]/gi, "");
}

function sanitizePhone(phone: string) {
  return phone?.replace(/\D/g, "");
}

function sanitizeEmail(input: string) {
  const trimmed = input.trim().toLowerCase();
  if (trimmed.includes("@") && trimmed.includes(".")) {
    return trimmed;
  } else {
    throw new Error("Invalid email format");
  }
}

export async function action({ request }: ActionFunctionArgs): Promise<Response> {
  try {
    const body = await request.formData();
    logger.log(body, "<<< demo request body");
    
    // Parse request fields
    const [
      firstName,
      lastName, 
      email,
      message,
      phone,
      jobTitle,
      company,
      message2, // honeypot field
    ] = [
      "firstName",
      "lastName",
      "email", 
      "message",
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

    // Check honeypot - if filled, it's a bot
    if (!message2) {
      await sendEmail({
        firstName,
        lastName,
        email,
        message,
        source: "Demo Request - Watch Demo Page",
        phone,
        jobTitle,
        company,
      });
    }
    
    return data({
      ok: true,
      message: "Demo request submitted successfully! We'll be in touch soon."
    });
  } catch (e) {
    logger.log(e, "<<< error from watch-demo action");
    return data({
      ok: false,
      message: "There was an error submitting your demo request. Please try again."
    });
  }
}

export function meta({}: Route.MetaArgs) {
  const title = "Watch Demo";
  const description =
    "Akila Analytics powers exceptional business outcomes with a no-code data science platform, streamlining the path to advanced analytics and data-driven insights.";
  return [
    { title: title },
    { property: "og:title", content: title },
    {
      name: "description",
      content: description,
    },
    {
      name: "og:description",
      content: description,
    },
  ];
}
