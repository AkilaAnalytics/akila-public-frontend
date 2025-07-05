import { useState, useEffect } from 'react'

function ShootingStar() {
  // Random start position for the shooting star
  const [style, setStyle] = useState({})

  useEffect(() => {
    const startX = Math.random() * (window.innerWidth - 5)
    const startY = Math.random() * (window.innerHeight - 5)
    const endX = startX + Math.random() * (window.innerWidth - startX) // random end position for X
    const endY = startY + Math.random() * (window.innerHeight - startY) // random end position for Y
    const animationDuration = `${Math.random() * (5 - 1) + 1}s` // random duration between 1 and 5 seconds

    setStyle({
      top: startY,
      left: startX,
      animation: `shooting-star ${animationDuration} linear ${animationDuration} infinite`,
      transform: `translate(${endX - startX}px, ${endY - startY}px)`
    })
  }, [])

  return (
    <div
      className="absolute z-50 h-1 w-1 rounded-full bg-white shadow-lg"
      style={style}
    />
  )
}

interface IProps {
  count: number
}
export default function ShootingStars({ count }: IProps) {
  return (
    <div className="absolute inset-0 h-[80vh] w-full overflow-hidden md:h-screen">
      {/* The mobile height needs to match the mobile height on the ./index file */}
      {[...Array(count)].map((_, index) => (
        <ShootingStar key={index} />
      ))}
    </div>
  )
}
