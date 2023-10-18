import { PeopleStandingInRoom } from '~/view/assets'

import ShareOnSocialMedia from '../ShareOnSocialMedia'

interface IProps {
  category: 'Private Equity' | 'Technology'
  date: string
  title: string
  subTitle: string
}

export default function Title({ category, date, title, subTitle }: IProps) {
  const url = 'https://wwww.akilaanalytics.com'
  return (
    <div className="h-[100vh]">
      <div className="relative">
        <img
          src={PeopleStandingInRoom}
          alt="Data Science"
          className="w-full h-[66vh]"
        />
        <div className="absolute top-20 md:top-0 md:left-20 bottom-0 transform md:translate-y-[50%] bg-white p-3 rounded-md w-full h-[90vh] md:h-auto md:max-w-[66%] text-black">
          <div className="flex flex-col">
            <div>
              <div className="text-periwinkle font-serif font-bold">
                {category}
              </div>
              <h2>{title}</h2>
              <h5>{subTitle}</h5>
            </div>
            <br />
            <div className="text-gray-800 font-light">{date}</div>
            <br />
            <ShareOnSocialMedia title={title} subTitle={subTitle} url={url} />
          </div>
        </div>
      </div>
    </div>
  )
}
