export { CustomerProfitabilityPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Profitability: Drive Value with Analytics";
  const description =
    "Dive deep into customer profitability analytics with Akila.";
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
