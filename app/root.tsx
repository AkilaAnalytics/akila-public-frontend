import {
  data,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  type LoaderFunctionArgs,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/components.css";
import "./styles/footer.css";
import "./styles/tailwind.css";
import "./styles/global.css";
import "./styles/tailwind.css";
import { logger } from "./utils";
import * as gtag from "~/utils/client/gtags.client";
import Footer from "~/view/features/Footer";
import { Navbar } from "./view/features";
import { MissingPage } from "./view/pages";
//import { Chat, FineTuning, AutoInvoice, AI } from "./view/pages";
import { useEffect, useState } from "react";
import { AppContextProvider } from "./view/context";

logger.log(
  "%cAkila Analytics",
  "color: rgba(35,37,202); font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;"
);

export const loader = ({ request }: LoaderFunctionArgs) => {
  const envVars = {
    gaTrackingId: process.env.GA_TRACKING_ID,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
  };

  const url = new URL(request.url);
  const hostname = url.hostname;
  let tenant = hostname && hostname.split(".")[0]; // gets "app" from "app.akilaanalytics.com"
  const temp = new URL(request.url);
  if (["auto-invoice", "ai", "private-llm"].includes(tenant)) {
    return data({
      ...envVars,
      tenant,
      isLandingPage: true,
      user: null,
    });
  } else {
    return data({
      ...envVars,
    });
  }
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { tenant, isLandingPage } = useLoaderData();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  if (isLandingPage) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
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
        <body className="textBody">
          <AppContextProvider>
            {/*<Chat />
            <Calendly />
            {tenant == "auto-invoice" && <AutoInvoice />}
            {tenant === "private-llm" && <FineTuning />}
            {tenant === "ai" && <AI />} */}
            <ScrollRestoration />
            <Scripts />
          </AppContextProvider>
        </body>
      </html>
    );
  }

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
      <body className="bg-background">
        <AppContextProvider>
          <Navbar />
          {/*<Chat
            isOpen={isChatOpen}
            onToggle={() => setIsChatOpen(!isChatOpen)}
          /> */}
          {children}
          <ScrollRestoration />
          <Scripts />
          <Footer />
        </AppContextProvider>
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
