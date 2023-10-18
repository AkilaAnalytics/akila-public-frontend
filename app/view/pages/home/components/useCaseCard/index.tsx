import { Link } from '@remix-run/react'

export default function UseCaseCard({ img, heading, description, link }) {
  return (
    <Link
      to={link}
      className="min-h-[446px] w-full max-w-[350px] rounded-[6px] border border-[#2A303E] hover:scale-105">
      <div className="min-h-[231px] ">
        <img src={img} className="w-full" alt="" />
      </div>
      <div className="p-[16px]">
        <h3 className="font-raleway mb-[12px] text-xl font-medium leading-7 text-[#ffffff]">
          {heading}
        </h3>
        <p className="font-raleway font-normal leading-[22px] text-[#E7E7E7]">
          {description}
        </p>
      </div>
    </Link>
  )
}
