export { EndToEndSolutionsPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "End-to-End Solutions - Akila Analytics Platform";
  const description =
    "Discover our comprehensive solutions that cover your data needs from start to finish.";
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
