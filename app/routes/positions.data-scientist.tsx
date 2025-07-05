export { DataScientistPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Data Scientist Position";
  const description =
    "Akila Analytics is seeking talented data scientists to join our team and shape the future of business analytics.";
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
