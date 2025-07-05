import { Helmet } from "react-helmet";
import { data, useLoaderData } from "react-router";
import type { Route } from "./+types/home";

export const loader = () => {
  return data({ test: "value" });
};

export default function PrivacyPolicy() {
  const data = useLoaderData();
  console.log(data, "<<< data from private-policy");
  return (
    <div>
      <Helmet>
        <script src="https://app.termly.io/embed-policy.min.js" />
      </Helmet>
      <div className="m-10 pt-10">
        <div
          name="termly-embed"
          data-id="d393b018-1047-4036-bc07-5678eb8dad47"
          data-type="iframe"
        ></div>
      </div>
    </div>
  );
}

export function meta({}: Route.MetaArgs) {
  const title = "Privacy Policy";
  const description =
    "Learn about Akila Analytics' commitment to user privacy and how we protect your data.";
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
