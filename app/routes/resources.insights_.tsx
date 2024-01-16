import type { LoaderArgs, ActionArgs } from '@remix-run/node'
import { MetaFunction } from '@remix-run/node'

import { GetObjectCommand } from '@aws-sdk/client-s3'
import { json } from '@remix-run/node'
import { useLoaderData, Link, useFetcher } from '@remix-run/react'
import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

import { MissingPage } from '~/view/pages/misc'
import { s3Client } from '~/utils/server/index.server'
import { logger } from '~/utils'
import { InsightsBannerImage } from '~/view/assets'
import { BannerImage } from '~/view/components'

interface IArticles {
  title: string
  subTitle: string
  category: string
  recommended: boolean
  preview: string
  image_link: string
  article_link: string
}
interface IVideos extends IArticles {
  link: string
}

interface IBlogMeta {
  meta: {
    articles: IArticles[]
    videos: IVideos[]
  }
}

let basePath
logger.log(process.env.NODE_ENV, '<<< NODE_ENV')
if (process.env.NODE_ENV === 'development') {
  basePath = 'https://www.staging.akilaanalytics.com/_blog'
} else {
  basePath = 'https://www.akilaanalytics.com/_blog'
}

export const loader = async () => {
  try {
    const params = {
      Bucket: process.env.STATIC_BUCKET,
      Key: '_blog/meta.json'
    }
    const command = new GetObjectCommand(params)
    const response = await s3Client.send(command)
    const str = await response.Body.transformToString()
    logger.log(str, '<<< str')
    return json(
      { ok: true, meta: JSON.parse(str) },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store'
        }
      }
    )
  } catch (e) {
    logger.log(e, '<<<  e from routes/resources.insights')
    return { ok: false }
  }
}

export default function Index() {
  const res = useLoaderData<IBlogMeta>()

  if (!res?.meta?.articles) return <MissingPage />

  const recommendedArticles = res.meta?.articles.filter(
    (ele) => ele.recommended === true
  )
  const allOtherArticles = res.meta?.articles.filter(
    (ele) => ele.recommended !== true
  )

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
          />{' '}
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
                  <Link
                    prefetch="intent"
                    to={`/resources/insights/${ele.title}`}
                  >
                    <h5 className="hover:font-bold">{ele.title}</h5>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <br />
      <div className="px-[5vw]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {allOtherArticles.map((ele) => {
            return (
              <div
                className="h-full rounded-lg border border-gray-500 p-4 shadow-md md:h-[60vh]"
                key={ele.title}
              >
                <img
                  src={`${basePath}/${ele.image_link}`}
                  className="h-1/3 w-full"
                  alt={`${ele.title}`}
                />
                <br />
                <span className="text-sm">{ele.category}</span>
                <Link to={ele.title}>
                  <h5 className="h-[7rem] font-semibold">
                    <span className="line-clamp-3 inline">{ele.title}</span>
                    <ChevronRightIcon className="inline h-6 w-20 text-periwinkle" />
                  </h5>
                </Link>

                <br />
                <p className="line-clamp-3">{ele.preview}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Insights' },
    { property: 'og:title', content: 'Insights' },
    {
      name: 'description',
      content:
        'Stay updated with the latest insights in data science, platform updates, and more from the Akila Analytics team.'
    }
  ]
}