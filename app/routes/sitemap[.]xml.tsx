import routes from "~/routes";
import { logger } from "~/utils";

const BASE_URL = "https://akilaanalytics.com";

const encodeUrl = (url: string) =>
  url.replace(/&/g, "&amp;").replace(/ /g, "%20");

export const loader = async () => {
  const staticPaths = routes
    .map((r) => r.path)
    .filter((p): p is string => typeof p === "string" && p && !p.includes(":"));

  let dynamicUrls: string[] = [];
  if (process.env.NODE_ENV === "production") {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/articles?fields[0]=title&fields[1]=slug`
    );
    const articles = await res.json();
    dynamicUrls = articles.data.map(
      (a: any) =>
        `${BASE_URL}/resources/insights/${encodeUrl(
          a.title.replace("?", "")
        )}?slug=${a.slug}`
    );
  }

  const urlEntries = [
    ...staticPaths.map((p) => `${BASE_URL}${p}`),
    ...dynamicUrls,
  ];

  const content = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries.map((u) => `<url><loc>${encodeUrl(u)}</loc></url>`).join("\n")}
</urlset>
`.trim();

  logger.log({ sitemap: urlEntries.length, source: "sitemap.xml" });
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
