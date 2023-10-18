interface Props {
  heading?: string
  description?: string
  title?: string
}
export default function CenterAlignHeadingDescription({
  heading,
  description,
  title
}: Props) {
  return (
    <div className="container_class">
      <div className="my-[50px]">
        {title && (
          <div className="font-raleway mb-[10px] text-center text-[12px] font-normal leading-6 text-[#E3E3E3] sm:text-base">
            {title}
          </div>
        )}
        <div className="font-raleway pb-4 text-center text-[32px] font-semibold leading-[48px] text-[#E7E7E7] sm:text-[40px]">
          {heading}
        </div>
        <div className="font-raleway text-center text-[14px] font-medium leading-[25px] text-[#E7E7E7] sm:text-lg">
          {description}
        </div>
      </div>
    </div>
  )
}
