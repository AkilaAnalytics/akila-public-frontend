import type { LinksFunction } from '@remix-run/node'

import { GetObjectCommand } from '@aws-sdk/client-s3'
import { useLoaderData } from '@remix-run/react'
import fm from 'front-matter'
import ReactMarkdown from 'react-markdown'

import styles from '~/styles/blog.css'
import { s3Client } from '~/utils/server/index.server'
import { GettingStartedSection } from '~/view/components'
import { Body, Summary, Title } from '~/view/features/Blog'
import { logger } from '~/utils'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

interface IProps {
  params: {
    title: string
  }
}
export const loader = async ({ params }: IProps) => {
  console.log('loader fired from blog.$title')
  logger.log(params, '<<< params from laoder in resources.insights.$title')
  const bucketParams = {
    Bucket: process.env.STATIC_BUCKET,
    Key: `_blog/${params.title}/${params.title}.md`
  }
  logger.log(bucketParams, '<<< bucketParams from resources.blog.$title')

  const command = new GetObjectCommand(bucketParams)
  const response = await s3Client.send(command)
  const str = await response.Body.transformToString()
  //logger.log(response, '<<< response from insights.$title')
  //logger.log(str, '<<< str from insights.$title')
  const { attributes, body } = fm(str)
  return { attributes, body, title: params.title }
}

interface IAttributes {
  title: string
  subTitle: string
  category: 'Private Equity' | 'Technology'
  date: string
  points: string[]
}

interface IData {
  attributes: IAttributes
  body: string
  title: string
}

export default function BlogTemplate() {
  const { attributes, body, title } = useLoaderData<IData>()
  logger.log(attributes, '<<<< attributes')
  //logger.log(body, '<<<< body')
  logger.log(title, '<<<< title')
  return (
    <div>
      <Title
        category={attributes.category}
        date={attributes.date}
        title={attributes.title}
        subTitle={attributes.subTitle}
        link={`${title}/image.jpg`}
      />
      <br />
      <br />
      <br />

      <Body>
        <Summary points={attributes.points} />
        <ReactMarkdown linkTarget="_blank" className="markdown">
          {body}
        </ReactMarkdown>
      </Body>
      <br />
      <br />
      <br />
      <GettingStartedSection />
    </div>
  )
}
