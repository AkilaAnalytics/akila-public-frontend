export { RecurringJobsPage as default } from "~/view/pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Recurring Jobs";
  const description =
    "Schedule and manage recurring jobs efficiently with Akila Analytics. Ensure your data workflows run smoothly and consistently.";
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
