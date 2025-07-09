import type { Route } from "./+types/home";
export { SaaS as default } from "~/view/pages";
import { data } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { logger } from "~/utils";
import { products } from "~/utils/server/index.server";

export async function loader({ params }: LoaderFunctionArgs) {
  return data({ products });
}
export function meta({}: Route.MetaArgs) {
  const title =
    "Financial Reporting Automation | Automated Marketing Reports | SaaS";
  const description =
    "Automate your financial reporting and marketing performance tracking with our no-code platform. Save 40+ hours monthly with automated reports, dashboards, and analytics at 90% less cost than DataRobot.";
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
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "keywords",
      content:
        "financial reporting automation, automated reporting software, marketing automation reporting, automated financial reports, no code reporting platform, business intelligence automation, automated dashboards, marketing performance reports",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ];
}
