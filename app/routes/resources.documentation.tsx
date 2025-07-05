import ComingSoonPage from "~/view/pages/comingSoon";
import { MetaFunction } from "@remix-run/node";

export default ComingSoonPage;

export const meta: MetaFunction = () => {
  const title = "Documentation";
  const description =
    "Access comprehensive documentation for Akila Analytics. Learn how to get started, best practices, and more.";
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
};
