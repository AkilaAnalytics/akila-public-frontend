export { TryFreePage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Try Akila Analytics for Free";
  const description =
    "Experience the power of Akila Analytics. Sign up now for a free trial and see the difference for yourself.";
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
