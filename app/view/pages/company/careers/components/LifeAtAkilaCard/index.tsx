export default function LifeAtAkilaCard({ img, heading, description }) {
  return (
    <div className="min-h-[414px] max-w-[350px] border-[2px] border-[#2A303E]  ">
      <div className="mb-[20px] min-h-[216px] ">
        <img src={img} alt="" />
      </div>
      <div className=" px-[20px]">
        <h2 className="mb-[20px] font-sans text-[20px] font-semibold leading-[28px] text-[#E7E7E7]">
          {heading}
        </h2>
        <p className="font-manrope line-clamp-3 text-[14px] font-normal leading-[22px] text-[#969696]">
          {description}
        </p>
      </div>
    </div>
  )
}
