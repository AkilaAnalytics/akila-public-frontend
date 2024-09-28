import {
  LoaderFunctionArgs,
  MetaFunction,
  createCookie,
  json,
} from "@remix-run/node";

import { useLoaderData, useLocation, useRouteError } from "@remix-run/react";

import { MissingPage } from "~/view/pages/misc";
import { logger } from "~/utils";
import { InsightsBannerImage } from "~/view/assets";
import { ArticleCard, BannerImage } from "~/view/components";
import { EmailSignUp } from "~/view/features";

type StrapiResponse = {
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
    // fetch cookie
    // this cookie parsing flow is laid out here:
    // https://remix.run/docs/en/main/utils/cookies
    const cookieHeader = request.headers.get("Cookie");
    const isSubscribedCookie = createCookie("isSubscribed");
    const isSubscribed = (await isSubscribedCookie.parse(cookieHeader)) as {
      isSubscribed: boolean;
    };
    logger.log({ cookieHeader, isSubscribedCookie, isSubscribed });

    // fetch articles
    const response = await fetch(
      "http://localhost:1337/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=recommended&populate[category][fields]=name&populate[cover]=*"
    );
    //articles = await articles.json();
    const baseImageLink = process.env.STRAPI_BASE_PATH;
    const articlesJson = (await response.json()) as Articles;
    const articles = articlesJson.data.map((ele: StrapiResponse) => {
      return {
        ...ele,
        category: ele.category.name,
        cover: `${baseImageLink}${ele.cover.url}`,
        slug: ele.slug,
      };
    });

    return json(
      {
        ok: true,
        isSubscribed: isSubscribed?.isSubscribed,
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
  logger.log(res, "<<< res");
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
            src="https://www.youtube.com/embed/noGW8OFr6Ko?si=ZXgZdzP9uXDuEjvx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="h-full w-full rounded-md bg-gray-800 p-5"
            allowFullScreen
          />{" "}
        </div>
        <div className="w-full p-5 md:w-3/4 md:p-0">
          <h4>Recommended</h4>
          {res.articles &&
            res.articles.map((ele, idx) => (
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
      <div className="px-[5vw]">
        {/* Series */}
        <h3>Series: A Primer on Technology for Non-Tech Founders</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {res.articles.map((ele) => {
            return (
              ele.category === "Tech for Non-Technical Founders" && (
                <ArticleCard
                  isPdf={false}
                  key={ele.title}
                  title={ele.title}
                  link={ele.slug}
                  image_link={ele.cover}
                  category={ele.category}
                  preview={ele.description}
                />
              )
            );
          })}
        </div>
        {/* All articles */}
        <h3 className="mt-16">All Articles</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {res.articles.map((ele) => {
            return (
              ele.category !== "Tech for Non-Technical Founders" && (
                <ArticleCard
                  isPdf={false}
                  key={ele.title}
                  title={ele.title}
                  link={ele.slug}
                  image_link={ele.cover}
                  category={ele.category}
                  preview={ele.description}
                />
              )
            );
          })}
        </div>
      </div>
      {!res.isSubscribed && <EmailSignUp />}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <div>Error</div>;
}

export const meta: MetaFunction = () => {
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
};
