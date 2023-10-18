interface IProps {
  children: React.ReactNode
  heading: string
  description: string
  title?: string // Optional since we're checking for its existence in the code
}

export default function AkilaBussinessCloudSection({
  children,
  heading,
  description,
  title
}: IProps) {
  return (
    <div className="container_class">
      <div className="my-[50px]">
        {title && (
          <div className="font-raleway mb-[10px] text-[12px] font-normal text-[#E3E3E3] sm:text-base">
            {title}
          </div>
        )}
        <div className="mb-[48px] max-w-[821px] ">
          <div className="font-raleway mb-6 text-[32px] font-semibold leading-[36px] sm:text-[40px] sm:leading-[48px]">
            {heading}
          </div>
          <div className="font-raleway text-[14px] font-normal leading-[20px] sm:text-base sm:leading-6">
            {description}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
