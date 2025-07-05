import type { Route } from "./+types/home";

export { EtlPipeline as default } from "~/view/pages";

export function meta({}: Route.MetaArgs) {
  const title = "ETL Pipelines";
  const description =
    "Build ETL pipelines and optimize data pipeline architecture with ease using Akila.";
  return [
    { title },
    {
      property: "og:title",
      content: title,
    },
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
