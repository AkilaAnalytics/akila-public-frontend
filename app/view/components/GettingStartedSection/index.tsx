import {
  akilaAnalyticsLogo,
  GettingStartedBackgroundImage
} from '~/view/assets'

import ButtonBar from '../ButtonsBar'

export default function GettingStartedSection() {
  return (
    <div
      className="my-[50px] flex min-h-[465px] w-full  items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${GettingStartedBackgroundImage})`
      }}>
      <div className="min-h-[247px] w-full max-w-[943px]">
        <div className="mx-auto mb-[48px] min-h-[61px]  w-full max-w-[468px]">
          <img
            src={akilaAnalyticsLogo}
            alt="Digital wave background"
            className="h-full w-full"
          />
        </div>
        <div className="sm:[40px] mb-[48px] text-center font-sans text-[30px] font-semibold leading-[40px] sm:text-[56px] sm:leading-[49px] md:text-[56px]">
          Getting Started with Akila Analytics
        </div>

        <div className="flex justify-center ">
          <ButtonBar />
        </div>
      </div>
    </div>
  )
}
