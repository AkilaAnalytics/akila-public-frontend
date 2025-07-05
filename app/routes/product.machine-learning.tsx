export { MachineLearningPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "Machine Learning";
  const description =
    "Build and deploy machine learning models with Akila Analytics. No coding required, yet powerful and flexible.";
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
