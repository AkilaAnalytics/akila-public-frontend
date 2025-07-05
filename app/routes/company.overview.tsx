import type { Route } from "./+types/home";
export { OverviewPage as default } from "~/view/pages";

export function meta({}: Route.MetaArgs) {
  const title = "Overview: No-Code Data Science";
  const description =
    "Akila Analytics is data science and businesss analytics platform, using generative and predictive AI with broad ecosystem interoperability to ensure the success of your initiatives every step of the way.";
  return [
    { title },
    {
      property: "og:title",
      content: title,
    },
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
