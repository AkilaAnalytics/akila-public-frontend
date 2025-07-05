import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import "./styles/components.css";
import "./styles/footer.css";
import "./styles/tailwind.css";
import "./styles/global.css"; // this must be after tailwind or the h1 font-size breaks
import { logger } from "./utils";
import { useEffect, useState } from "react";
import * as gtag from "~/utils/client/gtags.client";
import Footer from "~/view/features/Footer";
import { Navbar } from "./view/features";
import { MissingPage } from "./view/pages/misc";
import { Chat } from "./view/pages";

logger.log(
  "%cAkila Analytics",
  "color: rgba(35,37,202); font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;"
);

export const loader = () => {
  return json({
    gaTrackingId: process.env.GA_TRACKING_ID,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LcC2TEqAAAAAKI2-z_RqDp3bGXuikASgRr-IaDr"></script>
        {gaTrackingId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        ) : (
          ""
        )}
      </head>
      <body>
        <Navbar />
        <Chat isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
        {children}
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <MissingPage />
        <Scripts />
      </body>
    </html>
  );
}
