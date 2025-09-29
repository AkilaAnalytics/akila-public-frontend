import { Helmet } from "react-helmet";
import type { Route } from "./+types/home";

export default function TermsAndConditions() {
  return (
    <div className="m-10 rounded-md pt-10">
      <Helmet>
        <script src="https://app.termly.io/embed-policy.min.js" />
      </Helmet>
      <div
        name="termly-embed"
        data-id="42a6d74b-c8c2-4956-b82a-37fd34a74056"
        data-type="iframe"
      ></div>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  const title = "Terms and Conditions - Akila Analytics";
  const description =
    "Our terms and conditions to ensure transparent services.";
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
