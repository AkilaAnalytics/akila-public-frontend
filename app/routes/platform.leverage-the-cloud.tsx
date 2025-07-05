export { LeverageTheCloudPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "Leverage the Cloud: Easily Scale";
  const description = "Harness the power of the cloud with Akila Analytics.";
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
