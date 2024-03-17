import { Link } from '@remix-run/react'

import { PositionsCardReadMore } from '~/view/assets'

export default function SolutionsByPositionsCard({
  img,
  heading,
  description,
  link
}) {
  return (
    <div className="min-h-[324px] w-full max-w-[350px] rounded-[6px] border border-[#2A303E]">
      <div className="relative flex min-h-[153px] items-center justify-center">
        <img
          src={img}
          className="h-[300px] w-full object-cover"
          alt={`${heading} logo`}
        />
        <h3 className="absolute inset-0 mx-auto my-auto flex h-1/3 w-4/5 items-center justify-center rounded-md border-[1px] border-periwinkle bg-black p-4 font-sans text-xl font-medium leading-7 text-white">
          {heading}
        </h3>
      </div>

      <div className="p-[16px]">
        <p className="mb-[15px] line-clamp-4 font-sans font-normal leading-[22px] text-[#E7E7E7]">
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
