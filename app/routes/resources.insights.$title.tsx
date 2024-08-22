import { createCookie, type LinksFunction } from "@remix-run/node";
import { MetaFunction } from "@remix-run/node";

import { GetObjectCommand } from "@aws-sdk/client-s3";
import { useLoaderData, useRouteError } from "@remix-run/react";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

import { s3Client } from "~/utils/server/index.server";
import { GettingStartedSection } from "~/view/components";
import { Summary, Title } from "~/view/features/Blog";
import { logger } from "~/utils";
import { EmailSignUp } from "~/view/features";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "~/styles/blog.css" },
];

interface IProps {
  params: {
    title: string;
  };
}
export const loader = async ({ request, params }: IProps) => {
  // check if user is already subscribed to receive email alerts on the blog
  const cookie = createCookie("isSubscribed");
  const cookies = await cookie.parse(request.headers.get("Cookie"));

  const bucketParams = {
    Bucket: process.env.STATIC_BUCKET,
    Key: `_blog/${params.title}/${params.title}.md`,
  };
  logger.log(bucketParams, "<<< bucketParams from resources.blog.$title");

  let str;
  try {
    const command = new GetObjectCommand(bucketParams);
    const response = await s3Client.send(command);
    str = await response.Body.transformToString();
    //logger.log(response, "<<< response from s3 in insights.$title");
  } catch (error) {
    logger.log(error, "<<< error from s3 in insights.$title");
  }
  //createCookie
  //logger.log(response, '<<< response from insights.$title')
  //logger.log(str, '<<< str from insights.$title')
  const { attributes, body } = fm(str);
  return {
    attributes,
    body,
    title: params.title,
    isSubscribed: cookies?.isSubscribed,
  };
};

interface IAttributes {
  title: string;
  subTitle: string;
  category: "Private Equity" | "Technology";
  date: string;
  points: string[];
}

interface IData {
  attributes: IAttributes;
  body: string;
  title: string;
}

export default function BlogTemplate() {
  const { attributes, body, title, isSubscribed } = useLoaderData<IData>();
  return (
    <div className="flex flex-col gap-5">
      <Title
        category={attributes.category}
        date={attributes.date}
        title={attributes.title}
        subTitle={attributes.subTitle}
        link={`${title}/image.jpg`}
      />
      <div className="mx-auto flex w-full flex-col justify-center border-b-[1px] border-gray-800 px-5 md:w-1/2 md:px-0">
        <Summary points={attributes.points} />
        <ReactMarkdown
          linkTarget="_blank"
          className="markdown"
          skipHtml={true}
          components={{
            // Map `h4` (`# heading`) to use `h1`s for SEO
            h4(props) {
              const { node, ...rest } = props;
              return (
                <h4
                  style={{
                    borderBottom: "1px solid rgb(41, 38, 122)",
                    fontStyle: "normal",
                    fontFamily: "serif",
                    letterSpacing: "0.025em",
                  }}
                  {...rest}
                />
              );
            },
            ul(props) {
              const { node, ...rest } = props;
              return (
                <ul
                  style={{
                    width: "100%",
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
              return <blockquote {...rest} />;
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

export const meta: MetaFunction = ({ data }: IData) => {
  const { title, subTitle } = data.attributes; //useLoaderData<IData>()

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
      content: subTitle,
    },
  ];
};

export function ErrorBoundary() {
  const error = useRouteError();
  return <div>Error</div>;
}
