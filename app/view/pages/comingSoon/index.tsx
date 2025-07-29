import { Link } from "react-router";
import { akilaAnalyticsLogo } from "~/view/assets";

interface Props {
  title?: string;
  showLogo?: boolean;
}

export default function ComingSoonPage({ title, showLogo }: Props) {
  return (
    <div className="flex h-[80vh] items-center justify-center bg-black">
      <div className="text-center">
        {" "}
        {/* Center content within this div */}
        <div className="mb-10">
          <h4>{title}</h4>
          {showLogo && (
            <img src={akilaAnalyticsLogo} alt="Akila Analytics' logo" />
          )}
        </div>
        <div className="flex justify-center">
          {" "}
          {/* Add flex and justify-center here */}
        </div>
        {!title && <div className="text-6xl">Coming Soon</div>}
        <Link
          to="/"
          className="mt-10 button-gradient z-50 mx-auto my-auto flex w-full items-center justify-center rounded-md p-2 text-center text-xs uppercase tracking-widest hover:scale-105 md:w-auto md:whitespace-nowrap"
        >
          Return Home
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
