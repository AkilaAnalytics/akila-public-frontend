import { EarthVideo } from '~/view/assets'
import useRotatingText from './useTypingEffect'
import { useEffect, useState } from 'react'
import { BookDemo } from '~/view/components'

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
  const texts = [
    'Data Science',
    'Machine Learning',
    'Business Analytics',
    'Pushing Boundaries'
  ]
  //const speed = 70
  //const maxIterations = 3
  //const pauseDuration = 3000 // 3 seconds in milliseconds
  //const text = useRotatingText(texts, pauseDuration, maxIterations)

  const [animateOut, setAnimateOut] = useState(false)
  const [currentText, setCurrentText] = useState('Business Analytics')

  let currentIndex = 0
  const changeText = () => {
    setAnimateOut(true)

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length
      setCurrentText(texts[currentIndex])
      setAnimateOut(false)
    }, 300) // Duration of the roll out animation
  }

  useEffect(() => {
    const intervalId = setInterval(changeText, 3000) // Change text every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex min-h-[813px] flex-col items-center justify-center bg-cover bg-center">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 h-full w-full object-cover">
        <source src={EarthVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>

      <div className="z-50">
        <div className="my-auto text-center">
          <div className={`rollingText ${animateOut ? 'rollOut' : 'rollIn'}`}>
            <h1 className="whitespace-nowrap">
              <p className="text-gradient">{currentText}</p>
            </h1>
          </div>
          <h1>Made Easy</h1>
        </div>
        <h1 className="mb-[17px] text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="text-md mb-10 text-white md:text-lg">{subTitle}</p>
      </div>
      <BookDemo />
    </div>
  )
}
