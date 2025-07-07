import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { logger } from "~/utils/server/index.server";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const product = url.searchParams.get("product");
  let priceId;
  if (product === "auto-invoice") {
    priceId = process.env.STRIPE_AUTO_INVOICE_PRICE_ID!;
  }
  logger.log({ priceId, source: "loader routes/checkout" });
  return {
    stripeKey: process.env.STRIPE_KEY,
    baseUrl: process.env.BASE_URL,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    priceId,
  };
};

export default function Checkout() {
  const { stripePublishableKey, baseUrl, priceId } = useLoaderData();
  const [stripePromise, setStripePromise] =
    useState<Partial<Promise<Stripe>>>();

  useEffect(() => {
    if (stripePublishableKey) {
      setStripePromise(loadStripe(stripePublishableKey));
    }
  }, [stripePublishableKey]);

  const fetchClientSecret = async () => {
    try {
      const response = await fetch(
        `/api/stripe/create-checkout-session?priceId=${priceId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.clientSecret;
    } catch (error) {
      console.error("Error fetching client secret:", error);
      throw error;
    }
  };

  if (!stripePromise) {
    return <div>Loading...</div>;
  }

  return (
    <div id="checkout">
      <h3 className="my-5 px-5">Start your free trial</h3>
      <div className="border-periwinkle/50 mx-auto my-5 justify-center border-[1px] md:max-w-[75vw]">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{
            fetchClientSecret,
          }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}
