import type { Route } from "./+types/home";
import ComingSoonPage from "~/view/pages/comingSoon";

export default function OktaIntegrationPage() {
  return (
    <ComingSoonPage
      title="Our integration with Okta will be launching soon!"
      showLogo={false}
    />
  );
}

export function meta({}: Route.MetaArgs) {
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
}
