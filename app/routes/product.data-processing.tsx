import type { Route } from "./+types/home";
export { DataProcessingPage as default } from "~/view/pages";

export function meta({}: Route.MetaArgs) {
  const title = "Data Processing";
  const description =
    "Process vast amounts of data with ease. Akila Analytics provides powerful tools for data cleansing, transformation, and more.";
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
