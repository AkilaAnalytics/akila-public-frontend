import type { LoaderArgs, ActionArgs } from '@remix-run/node'
import { MetaFunction } from '@remix-run/node'

import { GetObjectCommand } from '@aws-sdk/client-s3'
import { json } from '@remix-run/node'
import { useLoaderData, Link, useFetcher } from '@remix-run/react'
import { useEffect, useState } from 'react'

import { s3Client } from '~/utils/server/index.server'
import { InsightsBannerImage } from '~/view/assets'
import { BannerImage } from '~/view/components'

interface IArticles {
  title: string
  subTitle: string
  category: string
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
export const loader = async () => {
  console.log('loader fired from insights_')
  try {
    const params = {
      Bucket: process.env.STATIC_BUCKET,
      Key: 'blog/meta.json'
    }
    const command = new GetObjectCommand(params)
    const response = await s3Client.send(command)
    const str = await response.Body.transformToString()
    return json(
      { ok: true, meta: JSON.parse(str), test: 'v1' },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store'
        }
      }
    )
  } catch (e) {
    console.log(e, '<<< error from resources/insights in loader')
    return { ok: false }
  }
}

export default function Index() {
  const [articles, setArticles] = useState<Partial<IBlogMeta>>()
  const res = useLoaderData<IBlogMeta>()
  console.log(res, '<<< res from from client')

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
            res.meta.articles.map((ele, idx) => (
              <div
                className="border-periwinkle-[1px] flex w-full flex-row items-center gap-5 border-b border-t py-3"
                key={ele.title}>
                <h2>{idx + 1}</h2>
                <div key={ele.title} className="my-auto">
                  <span className="text-periwinkle">{ele.category}</span>
                  <Link
                    prefetch="intent"
                    to={`/resources/blog/${ele.title
                      .replace(/ /g, '-')
                      .toLowerCase()}`}>
                    <h5 className="hover:font-bold">{ele.title}</h5>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <br />
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
