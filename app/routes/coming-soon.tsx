import type { Route } from "./+types/home";
export { default } from "~/view/pages/comingSoon";

export function meta({}: Route.MetaArgs) {
  const title = "Coming soon";
  const description =
    "Akila Analytics powers exceptional business outcomes with a no-code data science platform, streamlining the path to advanced analytics and data-driven insights.";
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
