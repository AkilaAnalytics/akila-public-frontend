export { UseCasesPage as default } from "~/view/pages/enterprise";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
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
}
