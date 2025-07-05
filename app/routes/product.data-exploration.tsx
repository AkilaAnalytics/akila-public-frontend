export { DataExplorationPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "Data Exploration";
  const description =
    "Explore your data effortlessly with Akila Analytics. Understand patterns, correlations, and derive insights in real-time.";
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
