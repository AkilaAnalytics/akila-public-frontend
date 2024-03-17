interface IProps {
  heading: string
  description: string
}

export default function ExperienceThePerksCard({
  heading,
  description
}: IProps) {
  return (
    <div className="h-full min-h-[250px] max-w-[255px] border-[1px] border-gray-800 p-[16px]">
      <div>
        <h2 className="mb-[29px] font-sans text-[20px] font-normal leading-[28px] text-[#FFFFFF]">
          {heading}
        </h2>
        <p className="font-sans text-[16px] font-normal leading-[24px] text-[#717684]">
          {description}
        </p>
      </div>
    </div>
  )
}
