export { WatchDemoPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Watch Akila Analytics Demo";
  const description =
    "Watch a comprehensive demo of Akila Analytics and discover how our platform can revolutionize your data science workflows.";
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
