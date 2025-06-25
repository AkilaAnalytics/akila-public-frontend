export { HardwareDetails as default } from "~/view/pages";
import { json, MetaFunction } from "@remix-run/node";
import { logger } from "~/utils";
import { type ProductData, getProductData } from "~/utils/server/index.server";
import type { LoaderFunctionArgs } from "@remix-run/node";

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

  return json<LoaderData>({ product });
}

export const meta: MetaFunction = () => {
  const title = "Business Workstations & AI Servers - Custom Built PCs";
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
};
