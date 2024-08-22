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

export interface IBlogMeta {
  meta: {
    articles: IArticles[];
    videos: IVideos[];
  };
  isSubscribed: boolean;
  basePath: string;
}

export const loader = async ({ request }) => {
  const cookie = createCookie("isSubscribed");
  const cookies = await cookie.parse(request.headers.get("Cookie"));
  try {
    const params = {
      Bucket: process.env.STATIC_BUCKET,
      Key: "_blog/meta.json",
    };
    const command = new GetObjectCommand(params);
    const response = await s3Client.send(command);
    //console.log(response, '<<<< response from resources.insights')
    const str = await response.Body.transformToString();
    //logger.log(str, '<<<< str from resources.insights')
    let basePath;
    if (process.env.NODE_ENV === "production") {
      basePath = "https://www.akilaanalytics.com/_blog";
    } else {
      basePath = "https://www.staging.akilaanalytics.com/_blog";
    }
    return json(
      {
        ok: true,
        meta: JSON.parse(str),
        isSubscribed: cookies?.isSubscribed,
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

const techForNonTechFounders = [
  {
    title: "What is the Cloud",
    preview: "Why am I using it and should I choose AWS, Azure, or GCP?",
    image_link: "what-is-the-cloud/image.jpg",
    category: "A Primer on Technology",
  },
  {
    title: "What are SQL Databases",
    preview: "Do I need one and which one do I choose?",
    image_link: "what-are-sql-databases/image.jpg",
    category: "A Primer on Technology",
  },
];

export default function Insights() {
  const res = useLoaderData<IBlogMeta>();
  const location = useLocation();
  const [basePath, setBasePath] = useState<string>(res.basePath);

  if (!res?.meta?.articles) return <MissingPage />;
  logger.log(res.meta.articles[10], "<<< res from useLoaderData");

  const recommendedArticles = res.meta?.articles.filter(
    (ele) => ele.recommended === true
  );
  const allOtherArticles = res.meta?.articles.filter(
    (ele) => ele.recommended !== true
  );

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
          {res.meta?.articles &&
            recommendedArticles.map((ele, idx) => (
              <div
                className="border-periwinkle-[1px] flex w-full flex-row items-center gap-5 border-b border-t py-3"
                key={ele.title}
              >
                <h2>{idx + 1}</h2>
                <div key={ele.title} className="my-auto">
                  <span className="text-periwinkle">{ele.category}</span>
                  <a
                    href={`/resources/insights/${ele.title}`}
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
          {techForNonTechFounders.map((ele) => {
            return (
              <ArticleCard
                isPdf={true}
                key={ele.title}
                basePath={basePath}
                title={ele.title}
                link={`/resources/insights/pdf/${ele.title}`}
                image_link={ele.image_link}
                category={ele.category}
                preview={ele.preview}
              />
            );
          })}
        </div>
        {/* All articles */}
        <h3 className="mt-16">All Articles</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {allOtherArticles.map((ele) => {
            return (
              <ArticleCard
                key={ele.title}
                isPdf={false}
                basePath={basePath}
                title={ele.title}
                link={`/resources/insights/${ele.title}`}
                image_link={ele.image_link}
                category={ele.category}
                preview={ele.preview}
              />
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
