import Stripe from "stripe";
import { data } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { createUserIfNotExists } from "~/utils/server/sql.server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const body = await request.json();
    const sessionId = body.session_id;

    if (!sessionId) {
      return data({ error: "Session ID is missing." }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "subscription", "customer"],
    });

    // Only create user if payment/subscription is complete
    if (session.status === "complete") {
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;

      if (customerEmail && customerName) {
        try {
          await createUserIfNotExists(customerEmail, customerName, session);
        } catch (error) {
          console.error("Failed to create user:", error);
          // Handle error appropriately
        }
      }
      return data({
        status: session.status,
        customer_email: session.customer_details?.email,
        customer_name: session.customer_details?.name,
        amount_total: session.amount_total,
        currency: session.currency,
        subscription_id: session.subscription?.id,
        line_items: session.line_items?.data,
        created: session.created,
        mode: session.mode,
      });
    }
  } catch (error: any) {
    console.error("Error retrieving Stripe session:", error);
    return data({ error: error.message }, { status: 500 });
  }
};
