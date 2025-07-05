export { IntegrateDataPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Data Integration: Easily Connect Data";
  const description =
    "Using Akila's data integration tools, Seamlessly integrate data with off-the-shelf or bespoke solutions.";
  return [
    { title: title },
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
