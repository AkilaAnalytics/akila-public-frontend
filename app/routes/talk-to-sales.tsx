export { TalkToSalesPage as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const title = "Talk to Sales";
  const description =
    "Interested in Akila Analytics? Talk to our sales team to learn how we can transform your business analytics journey.";
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
