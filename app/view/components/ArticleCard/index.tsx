interface IProps {
  isPdf: boolean;
  basePath: string;
  title: string;
  link: string;
  image_link: string;
  category: string;
  preview: string;
}

export default function ArticleCard({
  isPdf,
  basePath,
  title,
  link,
  image_link,
  category,
  preview,
}: IProps) {
  return (
    <div
      className="h-full rounded-lg border border-gray-500 p-4 shadow-md md:h-[60vh]"
      key={title}
    >
      <img
        src={`http://localhost:1337/${image_link}`}
        className="h-1/3 w-full"
        alt={`${title}`}
      />
      <br />
      <span className="text-sm">{category}</span>
      <div className="flex items-center">
        <a
          href={`/resources/insights/${link}?slug=${link}`}
          className="no-underline"
          target={isPdf ? "_blank" : undefined}
          rel="noreferrer"
        >
          <h5 className="h-[7rem] items-center justify-start font-semibold">
            {/* Display the whole title except the last word */}
            {title.substring(0, title.lastIndexOf(" "))}
            <span className="whitespace-nowrap">
              {/* Display the last word of the title */}{" "}
              {title.substring(title.lastIndexOf(" ") + 1)}
              {"  "}
              <span className="h-6 w-20 text-2xl text-periwinkle">
                &rsaquo;
              </span>
            </span>
          </h5>
        </a>
      </div>

      <br />
      <p className="line-clamp-3"> {preview?.replace(/[^a-zA-Z0-9 ]/g, "")}</p>
    </div>
  );
}
