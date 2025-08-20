import { type LoaderFunctionArgs, createCookie, data } from "react-router";
import type { Route } from "./+types/home";
import { useLoaderData, useLocation, useRouteError } from "react-router";
import { MissingPage } from "~/view/pages/misc";
import { logger } from "~/utils";
import { InsightsBannerImage } from "~/view/assets";
import { BannerImage } from "~/view/components";
import { EmailSignUp } from "~/view/features";
import ArticleByCategory from "~/view/features/Blog/ArticlesByCategory";

export type StrapiResponse = {
  title: string;
  slug: string;
  description: string;
  recommended: boolean;
  category: {
    name: string;
  };
  cover: {
    url: string;
  };
};

type StrapiCleanedResponse = {
  title: string;
  slug: string;
  description: string;
  recommended: boolean;
  category: string;
  cover: string;
};

type Articles = {
  id: number;
  data: StrapiResponse[];
};

export interface IBlogMeta {
  ok: boolean;
  isSubscribed: boolean;
  articles: StrapiCleanedResponse[];
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const cookieHeader = request.headers.get("Cookie");
    const isSubscribedCookie = createCookie("isSubscribed");
    const isSubscribed = (await isSubscribedCookie.parse(cookieHeader)) as {
      isSubscribed: boolean;
    };
    logger.log({
      apiToken: process.env.STRAPI_API_TOKEN,
      cookieHeader,
      isSubscribedCookie,
      isSubscribed,
    });

    // fetch articles
    const baseImageLink = process.env.STRAPI_FRONTEND_URL;
    const response = await fetch(
      //`${process.env.STRAPI_BASE_PATH}/api/blogs?populate=*`,
      `${process.env.STRAPI_BASE_PATH}/api/blogs?fields=title,slug,subtitle,category,recommended,summary&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          "Content-Type": "application/json", // optional
        },
      }
    );
    const articlesJson = (await response.json()) as Articles;
    logger.log({
      articlesJson: Array.isArray(articlesJson?.data)
        ? articlesJson.data[0]
        : [],
      source: "<<< response from routes/resources.insights",
    });
    const articles = articlesJson.data.map((ele: StrapiResponse) => {
      return {
        ...ele,
        category: ele.category,
        cover: `${baseImageLink}${ele.banner.url}`,
        slug: ele.slug,
      };
    });

    return data(
      {
        ok: true,
        isSubscribed: true, //isSubscribed?.isSubscribed,
        articles: articles,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (e) {
    console.log(e, "<<<  e from routes/resources.insights");
    return { ok: false };
  }
};

export default function Insights() {
  const res = useLoaderData<IBlogMeta>();
  //logger.log(res, "<<< res");
  const location = useLocation();

  if (!res?.articles) return <MissingPage />;

  return (
    <div>
      <BannerImage
        horizontalLine
        image={InsightsBannerImage}
        title="Insights"
        subTitle="Learn about the latest trends in data science"
      />
      <hr className="md:border-t-3 hidden md:block md:border-periwinkle" />
      <br />
      <br />
      <div className="flex w-full flex-col gap-3 md:flex-row md:gap-10 md:px-5">
        <div className="w-full">
          <iframe
            width="896"
            height="504"
            src="https://www.youtube.com/embed/ksr7Nd0Fb1k?si=jYkfw2OQRSxhXsbR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full p-5 md:w-3/4 md:p-0 h-[50vh] overflow-scroll">
          <h4>Recommended</h4>
          {res.articles &&
            res.articles
              .filter((ele) => ele.recommended)
              .map((ele, idx) => (
                <div
                  className="border-periwinkle-[1px] flex w-full flex-row items-center gap-5 border-b border-t py-3"
                  key={ele.title}
                >
                  <h2>{idx + 1}</h2>
                  <div key={ele.title} className="my-auto">
                    <span className="text-periwinkle">{ele.category}</span>
                    <a
                      href={`/resources/insights/${ele.title.replace(
                        "?",
                        ""
                      )}?slug=${ele.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:font-bold"
                    >
                      <h5>{ele.title}</h5>
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <br />
      <ArticleByCategory res={res} />
      {!res.isSubscribed && <EmailSignUp />}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <div>Error</div>;
}

export function meta({}: Route.MetaArgs) {
  const title = "Insights: No-Code Data Science";
  const description = `Stay updated with the latest insights in data science, platform updates, and more from the Akila Analytics team.`;
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
