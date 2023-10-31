import { Link } from '@remix-run/react'

import { PositionsCardReadMore } from '~/view/assets'

export default function SolutionsByPositionsCard({
  img,
  heading,
  description,
  link
}) {
  return (
    <div className="min-h-[324px] w-full max-w-[350px] rounded-[6px] border border-[#2A303E] hover:scale-105">
      <div className="min-h-[153px] ">
        <img
          src={img}
          className="max-h-[300px] w-full"
          alt={`${heading} logo`}
        />
      </div>
      <div className="p-[16px]">
        <h3 className="font-raleway mb-[3px] text-xl font-medium leading-7 text-[#ffffff]">
          {heading}
        </h3>
        <p className="font-raleway mb-[15px] line-clamp-4 font-normal leading-[22px] text-[#E7E7E7]">
          {description}
        </p>
        <Link to={link} className="flex items-center">
          <span className="mr-[5px] text-[#1A73E8]">Learn More</span>
          <span>
            <img src={PositionsCardReadMore} alt="" />
          </span>{' '}
        </Link>
      </div>
    </div>
  )
}
