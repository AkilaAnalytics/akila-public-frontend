export default function TeamsAndRolesSection({
  heading,
  description,
  cardsDescription,
  children
}) {
  return (
    <div className="container_class">
      <div className="my-[50px]">
        <div className="mx-auto  max-w-[818px] ">
          <h2 className="font-raleway mb-[12px] text-center text-[40px] font-semibold text-[#E7E7E7]">
            {heading}
          </h2>
          <p className="font-raleway mb-[40px] text-center text-[20px] font-normal leading-[28px] text-[#E7E7E7]">
            {description}
          </p>
          <p className="font-raleway mb-[24px] text-center text-[20px] font-semibold text-[#E7E7E7]">
            {cardsDescription}
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}
