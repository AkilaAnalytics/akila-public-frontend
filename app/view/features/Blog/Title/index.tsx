//import { PeopleStandingInRoom } from '~/view/assets'

import { logger } from '~/utils'
import ShareOnSocialMedia from '../ShareOnSocialMedia'
import { useLoaderData } from '@remix-run/react'

interface IProps {
  category: 'Private Equity' | 'Technology'
  date: string
  title: string
  subTitle: string
  link: string
}

export default function Title({
  category,
  date,
  title,
  subTitle,
  link
}: IProps) {
  let basePath
  logger.log(link, '<<< link from Blog/Title/index')
  if (process.env.NODE_ENV === 'development') {
    basePath = 'https://www.staging.akilaanalytics.com/_blog'
  } else {
    basePath = 'https://www.akilaanalytics.com/_blog'
  }
  return (
    <div>
      <img
        src={`${basePath}/${link}`}
        alt="Data Science"
        className="h-[50vh] w-full"
      />
      <div className="static h-auto w-full transform rounded-md bg-secondaryBackground p-3 md:relative md:left-20 md:top-[-30vh] md:h-auto md:w-2/3">
        <div>
          <p className="font-sans-serif font-bold tracking-wide text-periwinkle">
            {category}
          </p>
          <h1 className="text-6xl">{title}</h1>
          <h5>{subTitle}</h5>
        </div>
        <br />
        <div className="font-light">{date}</div>
        <br />
        <ShareOnSocialMedia
          title={title}
          subTitle={subTitle}
          url="akilaanalytics.com"
        />
      </div>
    </div>
  )
}
