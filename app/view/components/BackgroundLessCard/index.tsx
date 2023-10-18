interface Props {
  icon?: string
  heading?: string
  description?: string
}

export default function BackgroundLessCard({
  icon,
  heading,
  description
}: Props) {
  return (
    <div className="mt-6 flex  min-h-[235px] max-w-[349px] flex-col items-center     px-6 py-2">
      <div className=" flex max-w-[320px] flex-col items-center ">
        <div className="mb-5 flex h-full min-h-[80px] w-full max-w-[80px] items-center justify-center rounded-full bg-[#3C4354]">
          <img src={icon} alt="" />
        </div>

        <div className="font-raleway mb-4 text-center text-xl font-bold leading-7 text-[#e7e7e7]">
          {heading}
        </div>
        <div className="font-raleway text-center text-sm font-normal leading-5 text-[#969696]">
          {description}
        </div>
      </div>
    </div>
  )
}
