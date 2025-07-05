import type { Route } from "./+types/home";
export { ContactUs as default } from "~/view/pages";

export const loader = () => {
  return {
    PHONE_NUMBER: process.env.PHONE_NUMBER,
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
  };
};

export function meta({}: Route.MetaArgs) {
  const title = "Contact Us";
  const description =
    "Reach out to Akila Analytics. We’re here to answer any questions you might have as you expand your data analytics capabilities.";
  return [
    { title: "Contact Us" },
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
