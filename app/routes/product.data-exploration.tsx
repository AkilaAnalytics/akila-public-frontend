export { DataExplorationPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
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
}
