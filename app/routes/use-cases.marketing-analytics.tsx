export { MarketingAnalyticsPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Marketing Analytics: Gain Insights Faster";
  const description =
    "Optimize your marketing strategies using Akila Analytics.";
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
