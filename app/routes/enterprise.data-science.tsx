import type { Route } from "./+types/home";
export { DataSciencePage as default } from "~/view/pages/enterprise";

export function meta({}: Route.MetaArgs) {
  const title = "Enterprise Data Science";
  const description =
    "Empower your enterprise with advanced data science capabilities using Akila Analytics.";
  return [
    { title },
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
