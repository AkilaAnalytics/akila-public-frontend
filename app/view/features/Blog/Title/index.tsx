//import { PeopleStandingInRoom } from '~/view/assets'

import { logger } from '~/utils'
import ShareOnSocialMedia from '../ShareOnSocialMedia'

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
  logger.log(
    category,
    date,
    title,
    subTitle,
    link,
    '<<< category, date, title, subTitle1, link'
  )

  let basePath
  //logger.log(process.env.NODE_ENV, '<<< NODE_ENV')
  logger.log(link, '<<< link from Blog/Title/index')
  if (process.env.NODE_ENV === 'development') {
    basePath = 'https://www.staging.akilaanalytics.com/_blog'
  } else {
    basePath = 'https://www.akilaanalytics.com/_blog'
  }
  return (
    <div className="h-[70vh]">
      <div className="relative text-white">
        <img
          src={`${basePath}/${link}`}
          alt="Data Science"
          className="h-[50vh] w-full"
        />
        <div className="absolute bottom-0 top-20 h-[50vh] w-full transform rounded-md bg-secondaryBackground p-3 md:left-20 md:top-0 md:h-auto md:h-auto md:max-w-[66%] md:translate-y-[50%]">
          <div className="flex flex-col">
            <div>
              <div className="font-serif font-bold text-periwinkle">
                {category}
              </div>
              <h2>{title}</h2>
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
      </div>
    </div>
  )
}
