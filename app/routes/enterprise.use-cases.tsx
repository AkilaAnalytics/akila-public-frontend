export { UseCasesPage as default } from "~/view/pages/enterprise";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Enterprise Use Cases";
  const description =
    "Discover the variety of enterprise use cases that Akila Analytics supports.";
  return [
    { title },
    { property: "og:title", title },
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
