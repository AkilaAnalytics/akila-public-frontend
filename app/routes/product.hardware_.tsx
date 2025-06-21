export { Hardware as default } from "~/view/pages";
import { MetaFunction } from "@remix-run/node";

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
