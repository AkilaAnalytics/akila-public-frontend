export { PrivateEquityPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Private Equity  | Use Case";
  const description =
    "Discover how Akila Analytics enhances private equity decisions with state-of-the-art data science and analytics capabilities.";
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
