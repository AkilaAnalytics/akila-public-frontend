import {
  createCookie,
  LoaderFunctionArgs,
  type LinksFunction,
} from "@remix-run/node";

import { MetaFunction, useLoaderData, useRouteError } from "@remix-run/react";
import ReactMarkdown from "react-markdown";

import { GettingStartedSection } from "~/view/components";
import { Summary, Title } from "~/view/features/Blog";
import { logger } from "~/utils";
import { EmailSignUp } from "~/view/features";
import "~/styles/blog.css";

interface IProps {
  params: {
    title: string;
  };
}

interface StrapiBlog {
  id: number;
  title: string;
  description: string;
  category: {
    name: string;
  };
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  body: string;
  recommended: boolean;
  summary: string[];
  cover: {
    formats: {
      large: {
        url: string;
      };
    };
  };
}

interface LoaderResponse {
  body: string;
  title: string;
  description: string;
  summary: string[];
  coverImageLink: string;
  category: string;
  isSubscribed: boolean;
  createdAt: string;
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  // check if user is already subscribed to receive email alerts on the blog
  const cookie = createCookie("isSubscribed");
  const cookies = (await cookie.parse(request.headers.get("Cookie"))) as {
    isSubscribed: boolean;
  };
  const url = new URL(request.url);

  // Extract the 'slug' query parameter
  const slug = url.searchParams.get("slug");

  try {
    const res = await fetch(
      `http://localhost:1337/api/articles?filters[slug]=${slug}&populate=*`
    );
    const resJson = (await res.json()) as { data: StrapiBlog[] };
    const articles: StrapiBlog[] = resJson.data;
    //logger.log(articles.data[0].cover, "<<< final article from insights.title");

    const articlesCleaned = articles.map((ele) => {
      return {
        ...ele,
        category: ele.category.name,
        coverImageLink: `${process.env.STRAPI_BASE_PATH}${ele.cover.formats.large.url}`,
        cover: "", // don't send unnecessary information to the browser
        content_images: "",
      };
    });
    const article = articlesCleaned[0];
    logger.log(article, "<<< article from insights.$title");

    return {
      //attributes,
      body: article.body,
      title: article.title,
      description: article.description,
      summary: article.summary,
      coverImageLink: article.coverImageLink,
      category: article.category,
      isSubscribed: cookies?.isSubscribed,
      createdAt: article.createdAt,
    };
  } catch (error) {
    logger.log(error, "<<< error from s3 in insights.$title");
  }
};

export default function BlogTemplate() {
  const {
    body,
    title,
    summary,
    createdAt,
    category,
    isSubscribed,
    coverImageLink,
    description,
  } = useLoaderData<LoaderResponse>();
  return (
    <div className="flex flex-col gap-5">
      <Title
        category={category}
        date={createdAt}
        title={title}
        subTitle={description}
        link={coverImageLink}
      />
      <div className="mx-auto flex w-full flex-col justify-center pb-5 border-b-[1px] border-gray-800 px-5 md:w-1/2 md:px-0">
        <Summary points={summary} />
        <ReactMarkdown
          //linkTarget="_blank"
          className="markdown"
          skipHtml={false}
          components={{
            ul(props) {
              const { node, ...rest } = props;
              return (
                <ul
                  style={{
                    width: "10%",
                  }}
                  {...rest}
                />
              );
            },
            li(props) {
              const { node, ...rest } = props;
              return (
                <li
                  style={{
                    width: "100%",
                  }}
                  {...rest}
                />
              );
            },
            code(props) {
              const { node, ...rest } = props;
              return (
                <p
                  style={{
                    backgroundColor: "#919098",
                    color: "black",
                    padding: "20px",
                    borderRadius: "20px",
                  }}
                  {...rest}
                />
              );
            },
            em(props) {
              const { node, ...rest } = props;
              return (
                <i
                  style={{
                    backgroundColor: "rgb(41, 38, 122)",
                    fontStyle: "normal",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    borderRadius: "20px",
                    float: "right",
                    width: "40%",
                    marginLeft: "20px",
                  }}
                  {...rest}
                />
              );
            },
            blockquote(props) {
              const { node, ...rest } = props;
              return (
                <blockquote
                  style={{
                    backgroundColor: "rgb(41, 38, 122)",
                    fontStyle: "normal",
                    fontFamily: "sans-serif",
                    padding: "20px",
                    borderRadius: "20px",
                    float: "right",
                    width: "40%",
                    marginLeft: "20px",
                  }}
                  {...rest}
                />
              );
            },
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
      <br />
      <br />
      <br />
      <GettingStartedSection />
      {!isSubscribed && <EmailSignUp />}
    </div>
  );
}

export const meta = ({ data }: { data: LoaderResponse }) => {
  const { title, description } = data; //useLoaderData<IData>()

  // ensure titles don't have more than 70 characters
  let formattedTitle = title;

  // Check if title is more than 70 characters
  if (title.length > 70) {
    const indexOfColon = title.indexOf(":");

    if (indexOfColon !== -1) {
      // If there's a colon, take everything to the left of it
      formattedTitle = title.slice(0, indexOfColon);
    } else {
      // If there's no colon, take all full words that fit within 70 characters
      const trimmedTitle = title.slice(0, 70);
      const lastSpaceIndex = trimmedTitle.lastIndexOf(" ");

      formattedTitle = trimmedTitle.slice(0, lastSpaceIndex);
    }
  }

  return [
    { title: `Blog: ${formattedTitle}` },
    { property: "og:title", content: `Blog: ${formattedTitle}` },
    {
      name: "description",
      content: description,
    },
  ];
};

export function ErrorBoundary() {
  const error = useRouteError();
  return <div>Error</div>;
}
