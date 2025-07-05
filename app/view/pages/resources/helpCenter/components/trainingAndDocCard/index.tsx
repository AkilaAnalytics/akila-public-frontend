import { LearnMoreArrow } from '~/view/assets'

interface Props {
  logo?: string
  heading?: string
  description?: string
}

export default function TrainingAndDocCard({
  heading,
  icon,
  description
}: Props) {
  return (
    <div className="flex min-h-[364px] w-full  flex-col justify-between rounded-[9px] bg-[#191919]  px-[17px] py-[22px] ">
      <div className="">
        <div className="logo mb-10 flex min-h-[64px] w-full max-w-[64px] items-center justify-center rounded-full bg-[#3C4354]">
          <img src={icon} alt="icon" />
        </div>
        <div className="mb-10 font-sans text-xl font-semibold text-[#e7e7e7]">
          {heading}
        </div>
        <div className="description mb-6 font-sans text-sm font-normal leading-[20px] text-[#969696]">
          {description}
        </div>
      </div>{' '}
      <div className="read-more flex  items-center font-sans text-base font-normal leading-[24px] text-[#e7e7e7]">
        <div className="mr-[8px]">ReadMore</div>
        <img src={LearnMoreArrow} alt="" />
      </div>
    </div>
  )
}
