export { TalkToSalesPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
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
}
