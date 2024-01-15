//import { PeopleStandingInRoom } from '~/view/assets'

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
        {/*<img
          src={PeopleStandingInRoom }
          alt="Data Science"
          className="w-full h-[66vh]"
        />*/}
        <div className="absolute bottom-0 top-20 h-[90vh] w-full transform rounded-md bg-white p-3 text-black md:left-20 md:top-0 md:h-auto md:max-w-[66%] md:translate-y-[50%]">
          <div className="flex flex-col">
            <div>
              <div className="font-serif font-bold text-periwinkle">
                {category}
              </div>
              <h2>{title}</h2>
              <h5>{subTitle}</h5>
            </div>
            <br />
            <div className="font-light text-gray-800">{date}</div>
            <br />
            <ShareOnSocialMedia title={title} subTitle={subTitle} url={url} />
          </div>
        </div>
      </div>
    </div>
  )
}
