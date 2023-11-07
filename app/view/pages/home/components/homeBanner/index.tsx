import { EarthVideo } from '~/view/assets'
import useRotatingText from './useTypingEffect'

interface Props {
  image: string
  title?: string
  subTitle?: string
  superTitle?: string
}

export default function HomeBanner({
  title = '',
  subTitle = '',
  image,
  superTitle = ''
}: Props) {
  const phrases = [
    'Data Science',
    'Machine Learning',
    'Business Planning',
    'Push Boundaries'
  ]
  const speed = 70
  const maxIterations = 3
  const pauseDuration = 3000 // 3 seconds in milliseconds
  const text = useRotatingText(phrases, pauseDuration, maxIterations)

  return (
    <div className="flex min-h-[813px] items-center justify-center bg-cover bg-center">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 h-full w-full object-cover">
        <source src={EarthVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>

      <div className="z-50 max-w-[522px]">
        <div className="my-auto">
          <h1 className="whitespace-nowrap">{text}</h1>
          <h1 className="whitespace-nowrap">Made Easy</h1>
        </div>
        <h1 className="mb-[17px] text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="text-md mb-10 text-white md:text-lg">{subTitle}</p>
      </div>
    </div>
  )
}
