export { GovernancePage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Data Governance - Akila Analytics Platform";
  const description =
    "Ensure data quality, consistency, and security with our governance features.";
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
