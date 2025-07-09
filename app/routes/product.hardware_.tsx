import type { Route } from "./+types/home";
export { Hardware as default } from "~/view/pages";
import { Hardware } from "~/view/pages";
import { data, Outlet } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { logger } from "~/utils";
import { products } from "~/utils/server/index.server";

export async function loader({ params }: LoaderFunctionArgs) {
  return data({ products });
}

export function meta({}: Route.MetaArgs) {
  const title = "Servers, Computers, GPUS & Hardware for sale.";
  const description = "Purchase servers and workstations directly from Akila.";
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
