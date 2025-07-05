export { PricingPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Pricing: No-Code Data Science Platform";
  const description =
    "Discover pricing options for Akila Analytics and choose the plan that fits your needs.";
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
