import type { LinksFunction } from '@remix-run/node'

import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from '@remix-run/react'
import { useEffect } from 'react'

import * as gtag from '~/utils/client/gtags.client'
import Footer, { links as FooterLinks } from '~/view/features/Footer'

import componentStyles from './styles/components.css'
import globalStyles from './styles/global.css'
import styles from './styles/tailwind.css'
import { logger } from './utils'
import { Navbar } from './view/features'
import { MissingPage } from './view/pages/misc'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/_static/favicons/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/_static/favicons/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/_static/favicons/favicon-16x16.png'
    },
    { rel: 'icon', href: '/_static/favicons/favicon.ico' },

    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'stylesheet',
      href: globalStyles
    },
    {
      rel: 'stylesheet',
      href: componentStyles
    },
    ...FooterLinks()
  ]
}

export const meta = () => {
  return [
    { title: 'Akila Analytics' },
    {
      property: 'og:title',
      content: 'Akila Analytics'
    },
    {
      name: 'description',
      content: 'Akila: Modern Day Business Analytics'
    }
  ]
}

// DON'T DELETE: OUTPUTS AkilaAnalytics into the console
console.log('v13')
logger.log(
  '%cAkila Analytics',
  'color: rgba(35,37,202); font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;'
)

// Load the GA tracking id from the .env
export const loader = () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID })
}

export default function App() {
  const location = useLocation()
  const { gaTrackingId } = useLoaderData<typeof loader>()
  console.log(gaTrackingId, '<<< gaTrackingId')

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId)
    }
  }, [location, gaTrackingId])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {/* google analytics */}
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
              `
              }}
            />
          </>
        ) : (
          ''
        )}
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      <Footer />
    </html>
  )
}

export function ErrorBoundary({ error }: { error: any }) {
  return (
    <html>
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
  )
}
