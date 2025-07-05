export { VisualizeDataPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
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
};
