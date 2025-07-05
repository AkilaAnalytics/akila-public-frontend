export { UseCasesPage as default } from "~/view/pages/enterprise";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "Platform Security";
  const description =
    "Understand the security measures Akila Analytics implements to keep your data safe and secure.";
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
