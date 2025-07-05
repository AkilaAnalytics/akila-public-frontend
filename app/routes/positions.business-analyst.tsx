export { BusinessAnalystPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "Business Analyst Position";
  const description =
    "Leverage the power of Akila Analytics as a Business Analyst. Explore features tailored for business analysis tasks.";
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
