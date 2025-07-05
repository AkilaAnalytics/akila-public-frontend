export { VisualizeDataPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Visualize Data: Data Analysis Made Easy";
  const description =
    "Visualize your data effectively using Akila Analytics tools. Turn your data into meaningful insights.";
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
