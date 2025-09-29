export { ProductDetail as default } from "~/view/pages";
import type { Route } from "./+types/home";
import { logger } from "~/utils";
import { type ProductData, getProductData } from "~/utils/server/index.server";
import { data, type LoaderFunctionArgs } from "react-router";

interface LoaderData {
  product: ProductData;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { server } = params;
  logger.log({ server, source: "loader product.hardware.$server" });

  if (!server) {
    throw new Response("Product not found", { status: 404 });
  }

  const product = getProductData(server);

  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }

  return data<LoaderData>({ product });
}

export function meta({ data }: Route.MetaArgs) {
  if (!data || !data.product) {
    return [
      { title: "Business Workstations & AI Servers" },
      { property: "og:title", content: "Business Workstations & AI Servers" },
      {
        name: "description",
        content: "Professional workstations and AI servers built for business. From budget workstations to enterprise AI/ML powerhouses with NVIDIA A100 GPUs.",
      },
      {
        name: "og:description",
        content: "Professional workstations and AI servers built for business. From budget workstations to enterprise AI/ML powerhouses with NVIDIA A100 GPUs.",
      },
    ];
  }

  const { product } = data;
  const title = `Business Workstations & AI Servers - ${product.name}`;
  const description =
    "Professional workstations and AI servers built for business. From budget workstations to enterprise AI/ML powerhouses with NVIDIA A100 GPUs.";
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
