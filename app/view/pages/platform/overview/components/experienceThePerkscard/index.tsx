interface IProps {
  heading: string
  description: string
}

export default function ExperienceThePerksCard({
  heading,
  description
}: IProps) {
  return (
    <div className="min-h-[250px] max-w-[255px] p-[16px] h-full border-gray-800 border-[1px]">
      <div>
        <h2 className="font-raleway mb-[29px] text-[20px] font-normal leading-[28px] text-[#FFFFFF]">
          {heading}
        </h2>
        <p className="font-raleway text-[16px] font-normal leading-[24px] text-[#717684]">
          {description}
        </p>
      </div>
    </div>
  )
}
