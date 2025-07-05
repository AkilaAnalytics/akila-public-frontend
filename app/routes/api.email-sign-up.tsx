import { createCookie, data } from "react-router";
import { sendEmail } from "~/api/emails/index.server";
import { getFile, putFile } from "~/api/s3";
import { logger } from "~/utils";

function sanitizeEmail(input: string) {
  // A very basic validation and sanitization:
  // 1. Trim spaces.
  // 2. Convert to lowercase.
  // 3. Ensure it contains an "@" and a "." character.
  const trimmed = input.trim().toLowerCase();
  if (trimmed.includes("@") && trimmed.includes(".")) {
    return true;
  } else {
    return false;
  }
}

const emailsDbFile = "_blog_database/emails_db.json";

const userCookie = createCookie("isSubscribed", {
  maxAge: 60 * 60 * 24 * 30, // 30 days
});

export async function action({ request }) {
  const body = await request.formData();
  logger.log(body, "<<< body from api.email-sign-up");
  const actionType = body.get("actionType");
  const email = body.get("email");
  const honeyPot = body.get("hPot");
  const source = body.get("source");
  logger.log(honeyPot, "<<< honeyPot");
  if (honeyPot !== "") return data({});
  const validEmail = sanitizeEmail(email);
  if (!validEmail) return data({});

  try {
    let emailDb = await getFile(process.env.STATIC_BUCKET!, emailsDbFile);
    emailDb = JSON.parse(emailDb);
    logger.log(emailDb.length, "<<< emailDb.length");

    // make sure no one spams the endpoint by sending thousands of sign ups
    if (emailDb.length > 10000) {
      return data({
        headers: {
          "Set-Cookie": await userCookie.serialize({ subscribed: false }),
        },
      });
    }
    switch (actionType) {
      case "subscribe":
        console.log(emailDb, "<<< emailDb");
        await sendEmail({
          firstName: "",
          lastName: "",
          email: email,
          message: "A new user signed up to receive alerts for the blog.",
          source: "public pages. email sign-up for blog. ",
        });
        const newUser = {
          email,
          isVerified: true,
          source,
          date: Date.now(),
        };
        emailDb.push(newUser);
        console.log(emailDb, "<<< emailDb after pushing newUser");
        await putFile(
          process.env.STATIC_BUCKET!,
          emailsDbFile,
          JSON.stringify(emailDb)
        );

        // create user
        return data(
          {},
          {
            headers: {
              "Set-Cookie": await userCookie.serialize({ isSubscribed: true }),
            },
          }
        );
      case "unsubscribe":
        const newEmails = emailDb.filter((item) => item.email !== email);
        putFile(process.env.STATIC_BUCKET!, emailsDbFile, newEmails);

        // create user
        return data({
          headers: {
            "Set-Cookie": await userCookie.serialize({ subscribed: false }),
          },
        });
      default:
        break;
    }
  } catch (e) {
    console.log(e, "<<< e from api.email-sign-up");
    return data({});
  }
}
