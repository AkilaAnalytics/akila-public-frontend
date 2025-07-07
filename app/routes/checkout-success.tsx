import type { LoaderFunctionArgs } from "react-router";
export { default } from "~/view/features/StripeCheckout/SuccessPage";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");

  console.log({
    sessionId,
    searchParams: url.searchParams,
    source: "loader in SuccessPage",
  });

  return {
    sessionId,
    baseUrl: process.env.BASE_URL,
  };
};
