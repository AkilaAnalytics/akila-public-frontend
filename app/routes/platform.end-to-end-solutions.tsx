export { EndToEndSolutionsPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "End-to-End Solutions - Akila Analytics Platform";
  const description =
    "Discover our comprehensive solutions that cover your data needs from start to finish.";
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
