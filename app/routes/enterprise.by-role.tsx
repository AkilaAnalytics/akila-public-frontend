import type { Route } from "./+types/home";
export { ByRolePage as default } from "~/view/pages/enterprise";

export function meta({}: Route.MetaArgs) {
  const title = "Enterprise by Role";
  const description =
    "Discover how different roles can utilize Akila Analytics in the enterprise environment.";
  return [
    { title },
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
