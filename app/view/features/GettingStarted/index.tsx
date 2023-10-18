import {
  akilaAnalyticsLogo,
  GettingStartedBackgroundImage
} from '~/view/assets'
import ButtonBar from '~/view/components/ButtonsBar'

export default function GettingStarted() {
  return (
    <div className="relative h-[40vh] sm:h-full">
      <img
        src={GettingStartedBackgroundImage}
        className="h-full w-full object-cover"
        alt="Getting Started"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform space-y-8">
        <img
          src={akilaAnalyticsLogo}
          className="mx-auto block h-8 md:h-16"
          alt="Akila Analytics"
        />
        <p className="sm:text4xl whitespace-nowrap text-2xl font-medium leading-normal tracking-wide text-white lg:text-5xl">
          Getting Started with Akila Analytics
        </p>
        <div className="flex justify-center space-x-4">
          <ButtonBar />
        </div>
      </div>
    </div>
  )
}
