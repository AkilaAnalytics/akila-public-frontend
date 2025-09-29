import type { Route } from "./+types/home";
import { createCookie, type LoaderFunctionArgs } from "react-router";
import { useLoaderData, useRouteError } from "react-router";
import ReactMarkdown from "react-markdown";

import { GettingStartedSection } from "~/view/components";
import { CallToAction, Summary, Title } from "~/view/features/Blog";
import { logger } from "~/utils/server/index.server";
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

  // Extract the 'slug' route parameter
  const slug = params.slug;
  logger.log({ slug, source: "<<< slug from insights.$title loader" });

  try {
    const res = await fetch(
      `${process.env.STRAPI_BASE_PATH}/api/blogs?filters[slug]=${slug}&populate=*&locale=all`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
          "Content-Type": "application/json", // optional
        },
      }
    );
    const resJson = (await res.json()) as { data: StrapiBlog[] };
    const articles: StrapiBlog[] = resJson.data;
    logger.log({ articles, source: "<<< final article from insights.title" });
    if (!articles) return;

    const articlesCleaned = articles.map((ele) => {
      let coverImageLink;
      if (ele.banner.formats.large) {
        coverImageLink = `${process.env.STRAPI_FRONTEND_URL}${ele.banner.formats?.large?.url}`;
      } else if (ele.banner.formats.thumbnail) {
        coverImageLink = `${process.env.STRAPI_FRONTEND_URL}${ele.banner.formats?.thumbnail?.url}`;
      }
      return {
        ...ele,
        category: ele.category.name,
        coverImageLink,
        cover: "", // don't send unnecessary information to the browser
        content_images: "",
      };
    });
    const article = articlesCleaned[0];
    logger.log({ article, source: "<<< article from insights.$title" });

    return {
      //attributes,
      body: article.body,
      title: article.title,
      description: article.description,
      summary: article.summary,
      coverImageLink: article.coverImageLink,
      category: article.category,
      isSubscribed: true, //cookies?.isSubscribed,
      createdAt: article.createdAt,
    };
  } catch (error) {
    logger.log({
      error,
      stringError: String(error),
      source: "<<< error from loader in insights.$title",
    });
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <Title
        category={category}
        date={createdAt}
        title={title}
        subTitle={description}
        link={coverImageLink}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-900">
        {/* Summary Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <Summary points={summary} />
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <ReactMarkdown
            className="prose prose-lg prose-gray max-w-none"
            components={{
              // Headings
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {children}
                </h3>
              ),

              // Paragraphs
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
              ),

              // Lists
              ul: ({ children }) => (
                <ul className="space-y-2 mb-6 ml-6">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-700 leading-relaxed list-disc">
                  {children}
                </li>
              ),

              // Code blocks
              code: ({ children, className }) => {
                const isInline = !className;

                if (isInline) {
                  return (
                    <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                      {children}
                    </code>
                  );
                }

                return (
                  <div className="my-6 rounded-xl bg-gray-900 p-6 overflow-x-auto">
                    <code className="text-gray-100 font-mono text-sm">
                      {children}
                    </code>
                  </div>
                );
              },

              // Emphasis/Callouts
              em: ({ children }) => (
                <aside className="float-right w-full md:w-2/5 ml-0 md:ml-8 mb-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                  <div className="text-blue-900 font-medium">{children}</div>
                </aside>
              ),

              // Blockquotes
              blockquote: ({ children }) => (
                <blockquote className="float-right w-full md:w-2/5 ml-0 md:ml-8 mb-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl shadow-sm">
                  <div className="text-blue-900 font-medium italic">
                    {children}
                  </div>
                </blockquote>
              ),

              // Links
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-800 underline underline-offset-2 decoration-blue-600/30 hover:decoration-blue-800/50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {body}
          </ReactMarkdown>
        </article>

        <CallToAction />
      </div>
    </div>
  );
}
export function meta({}: Route.MetaArgs) {
  const { title, description } = useLoaderData<object>();
  if (!title || !description) return null;

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
}
