export { IntegrateDataPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
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
};
