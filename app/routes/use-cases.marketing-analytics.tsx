export { MarketingAnalyticsPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
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
};
