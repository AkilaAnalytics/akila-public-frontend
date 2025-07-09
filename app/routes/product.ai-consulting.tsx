import type { Route } from "./+types/home";
export { AIConsutling as default } from "~/view/pages";
import { data } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { logger } from "~/utils";
import { products } from "~/utils/server/index.server";

export async function loader({ params }: LoaderFunctionArgs) {
  return data({ products });
}

export function meta({}: Route.MetaArgs) {
  const title =
    "AI Consulting Services | Custom Solutions & Implementation | Akila Analytics";
  const description =
    "Transform your business with comprehensive AI consulting services. We provide end-to-end AI solutions combining our no-code platform, custom hardware, and expert consulting for measurable results.";
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
        "ai consulting companies, ai consulting services, custom ai solutions, ai implementation, ai strategy consulting, business ai transformation, ai platform, ai hardware solutions",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ];
}
