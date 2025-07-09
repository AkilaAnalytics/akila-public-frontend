import type { Route } from "./+types/home";
export { PrivateLlm as default } from "~/view/pages";
import { data } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { logger } from "~/utils";
import { products } from "~/utils/server/index.server";

export async function loader({ params }: LoaderFunctionArgs) {
  return data({ products });
}

export function meta({}: Route.MetaArgs) {
  const title =
    "Private LLM | Deploy Your Own On-Premises LLM Server | Akila Analytics";
  const description =
    "Deploy your own private LLM with custom hardware that reduces costs by 60-80% while keeping your data completely secure. No API fees, complete privacy, and full control over your AI models.";
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
        "private llm, private large language model, on-premises llm, local llm, self-hosted llm, private ai, llm hardware, custom ai servers, open source llm, private chatgpt alternative",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ];
}
