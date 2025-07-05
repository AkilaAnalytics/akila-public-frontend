import { Link } from "react-router";

export default function UseCasesCard({
  img,
  heading,
  link,
  description,
  date,
}) {
  return (
    <div className="min-h-[612px]  w-full max-w-[350px]  border-[1px] border-[#2A303E] bg-[#0E0E0E]  p-4">
      <div>
        <div className="mb-4 min-h-[198px]  max-w-[318px]  rounded-lg ">
          <img src={img} className="h-full w-full" alt="" />
        </div>
        <div className="">
          <div className="mb-[20px]">
            <div className="mb-[12px]">{date}</div>
            <div className="h-[1px] w-[73px] bg-[#3134DB]"></div>
          </div>
          <div>
            <h3 className="mb-[20px] font-sans text-[20px] font-semibold text-[#E7E7E7]">
              {heading}
            </h3>
            <p className="font-manrope mb-[20px] line-clamp-4 h-[86px]  text-[14px] font-normal leading-[22px] text-[#969696]">
              {description}
            </p>
          </div>
          <Link to={link}>Read More</Link>
        </div>
      </div>
    </div>
  );
}
