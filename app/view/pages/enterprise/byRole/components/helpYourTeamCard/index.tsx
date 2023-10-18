import { Link } from '@remix-run/react'

export default function HelpYourTeamCard({ heading, img, description, link }) {
  return (
    <div className="min-h-[355px] w-full max-w-[255px]  p-[16px]">
      <div className="">
        <div className="mb-[16px] min-h-[146px] w-full ">
          <img src={img} alt="" />
        </div>
        <div className="mb-[32px]">
          <h2 className="font-raleway mb-[12px] text-[20px] font-semibold leading-[28px]">
            {heading}
          </h2>
          <p className="font-raleway text-[14px] font-normal leading-[20px] text-[#E7E7E7]">
            {description}
          </p>
        </div>
        <Link className="hidden">Learn More</Link>
      </div>
    </div>
  )
}
