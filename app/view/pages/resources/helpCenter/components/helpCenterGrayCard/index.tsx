export default function HelpCenterGrayCard({ icon, title, heading }) {
  return (
    <div className="min-h-[206px] w-full max-w-[100%] rounded-[9px]  bg-[#3C4354] px-[21px] py-[11px] sm:max-w-[50%]">
      <div className="mb-[17px] flex justify-center">
        <img src={icon} alt="" />
      </div>
      <div className="mb-3 text-center">{title}</div>
      <div className="mb-[30px] text-center">{heading}</div>
      <div className="text-center">Get Started</div>
    </div>
  )
}
