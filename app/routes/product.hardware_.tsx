export { Hardware as default } from "~/view/pages";
import { json, MetaFunction } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { logger } from "~/utils";
import { products } from "~/utils/server/index.server";

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ products });
}

export const meta: MetaFunction = () => {
  const title = "Servers, Computers, GPUS & Hardware for sale.";
  const description =
    "Purchase PCs, servers, GPUs, and hardware directly from Akila.";
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
