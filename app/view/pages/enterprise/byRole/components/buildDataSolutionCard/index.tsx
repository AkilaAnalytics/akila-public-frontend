export default function BuildDataSolutionCard({ logo, description }) {
  return (
    <div className="flex min-h-[172px] w-full max-w-[255px] flex-col items-start justify-center ">
      <img src={logo} alt="" className="mb-[24px]" />
      <p className="font-raleway text-[18px] font-normal leading-[26px] text-[#E3E3E3]">
        {description}
      </p>
    </div>
  )
}
