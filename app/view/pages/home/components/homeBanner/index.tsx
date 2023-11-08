import { EarthVideo } from '~/view/assets'
import { useEffect, useState } from 'react'
import { BookDemo } from '~/view/components'
import ShootingStar from './ShootingStar'
import ShootingStars from './ShootingStar'

export default function HomeBanner() {
  const texts = [
    'Data Science',
    'Machine Learning',
    'Business Analytics',
    'Data Exploration'
  ]
  const [animateOut, setAnimateOut] = useState(false)
  const [currentText, setCurrentText] = useState('Business Analytics')

  let currentIndex = 0
  const changeText = () => {
    setAnimateOut(true)

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length
      setCurrentText(texts[currentIndex])
      setAnimateOut(false)
    }, 300)
  }

  useEffect(() => {
    const intervalId = setInterval(changeText, 3000) // Change text every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="shooting-star-container z-50 flex min-h-[813px] flex-col items-center bg-cover bg-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 z-10 h-full w-full object-cover">
        <source src={EarthVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ShootingStars count={10} />
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50"></div>

      <div className="z-50 mt-[15vh]">
        <div className="my-auto text-center">
          <div className={`rollingText ${animateOut ? 'rollOut' : 'rollIn'}`}>
            <h1 className="whitespace-nowrap">
              <p className="text-gradient">{currentText}</p>
            </h1>
          </div>
          <h1>Made Easy</h1>
        </div>
        <p className="text-md mb-10 px-5 text-white md:text-lg">
          Simplify and automate your data analytics workflows with an intuitive
          and easy-to-use interface.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <BookDemo />
    </div>
  )
}
