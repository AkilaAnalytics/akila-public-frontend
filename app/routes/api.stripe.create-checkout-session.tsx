import Stripe from "stripe";
import { data, type ActionFunctionArgs } from "react-router";
import logger from "~/utils/server/logger.server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url);
  const priceId = url.searchParams.get("priceId");
  logger.log({ priceId, source: "action api.stripe.create-checkout-session" });
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        // Make sure this price ID is for a recurring/subscription product
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription", // Changed from 'recurring' to 'subscription'
    return_url: `${process.env.BASE_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`, // Fixed placeholder

    // Optional: Add subscription-specific settings
    subscription_data: {
      trial_period_days: 7, // Optional: 7-day free trial
      metadata: {
        // Add any custom metadata you want to track
        plan_type: "premium",
      },
    },

    // Optional: Allow promotion codes
    allow_promotion_codes: true,

    // Optional: Collect customer information
    //customer_creation: 'always', // Always create a customer for subscriptions

    // Optional: Set billing address collection
    billing_address_collection: "required",
  });

  return data({ clientSecret: session.client_secret });
};

// NOTE: this works for one time payments
//export const action = async () => {
//  const session = await stripe.checkout.sessions.create({
//    ui_mode: 'custom',
//
//    line_items: [
//      {
//        // Provide the exact Price ID (e.g. price_1234) of the product you want to sell
//        price: '',
//        quantity: 1,
//      },
//    ],
//    mode: 'payment',
//    return_url: `${process.env.BASE_URL}/return?session_id=test`,
//  });
//
//  return data({ clientSecret: session.client_secret });
//};
