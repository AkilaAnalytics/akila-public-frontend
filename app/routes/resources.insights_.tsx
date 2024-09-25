import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { MetaFunction, createCookie, json } from "@remix-run/node";

import { GetObjectCommand } from "@aws-sdk/client-s3";
import {
  useLoaderData,
  Link,
  useFetcher,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { MissingPage } from "~/view/pages/misc";
import { s3Client } from "~/utils/server/index.server";
import { logger } from "~/utils";
import { InsightsBannerImage } from "~/view/assets";
import { ArticleCard, BannerImage } from "~/view/components";
import { EmailSignUp } from "~/view/features";
import axios from "axios";

interface IArticles {
  title: string;
  subTitle: string;
  category: string;
  recommended: boolean;
  preview: string;
  image_link: string;
  article_link: string;
}
interface IVideos extends IArticles {
  link: string;
}

interface Article {
  title: string;
  slug: string;
  description: string;
  recommended: boolean;
  category: string;
}

export interface IBlogMeta {
  meta: {
    articles: IArticles[];
    videos: IVideos[];
  };
  isSubscribed: boolean;
  basePath: string;
  articles: Article[];
}

export const loader = async ({ request }) => {
  const cookie = createCookie("isSubscribed");
  const cookies = await cookie.parse(request.headers.get("Cookie"));
  let articles = await fetch(
    "http://localhost:1337/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=recommended&populate[category][fields]=name&populate[cover]=*"
  );
  articles = await articles.json();
  //logger.log(articles, "<<< articles from strapi");
  // category is nested so we'll flatten the objects
  articles = articles.data.map((ele) => {
    return {
      ...ele,
      category: ele.category.name,
      cover: ele.cover.url,
      slug: ele.slug,
    };
  });

  logger.log(articles, "<<< articles from strapi");

  try {
    const params = {
      Bucket: process.env.STATIC_BUCKET,
      Key: "_blog/meta.json",
    };
    const command = new GetObjectCommand(params);
    const response = await s3Client.send(command);
    //console.log(response, '<<<< response from resources.insights')
    const str = await response.Body.transformToString();
    let basePath;
    if (process.env.NODE_ENV === "production") {
      basePath = "https://www.akilaanalytics.com/_blog";
    } else {
      basePath = "https://www.staging.akilaanalytics.com/_blog";
    }
    //console.log(str, "<<< str");
    return json(
      {
        ok: true,
        meta: JSON.parse(str),
        isSubscribed: cookies?.isSubscribed,
        articles: articles,
        basePath,
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
  const [basePath, setBasePath] = useState<string>(res.basePath);

  if (!res?.meta?.articles) return <MissingPage />;
  logger.log(res.meta.articles[10], "<<< res from useLoaderData");

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
                  basePath={basePath}
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
                  basePath={basePath}
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
  console.log("ERROR FROM BOUNDARY", error);
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
