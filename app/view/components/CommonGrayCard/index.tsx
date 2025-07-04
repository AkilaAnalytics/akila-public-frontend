import { Link } from "react-router";

import { LearnMoreArrow } from "~/view/assets";

interface Props {
  logo?: string;
  heading?: string;
  description?: string;
  link?: string;
}

export default function CommonGrayCard({
  heading,
  logo,
  description,
  link,
}: Props) {
  return (
    <div className="flex min-h-[364px] w-full flex-col justify-between rounded-[9px] bg-[#191919] px-[17px] py-[22px] md:w-[255px] ">
      <div className="">
        <div className="logo mb-10 flex min-h-[64px] w-full max-w-[64px] items-center justify-center rounded-full bg-[#3C4354]">
          <img src={logo} alt="" />
        </div>
        <div className="line-clamp-2 font-sans text-xl font-semibold text-[#e7e7e7]">
          {heading}
          <br />
          <br />
        </div>
        <br />
        <br />
        <div className="description mb-6 font-sans text-sm font-normal leading-[20px] text-[#969696]">
          {description}
        </div>
      </div>{" "}
      {link && (
        <div className="read-more flex  items-center font-sans text-base font-normal leading-[24px] text-[#e7e7e7]">
          <Link to={link} className="mr-[8px] hover:text-periwinkle">
            Read More
          </Link>
          <img src={LearnMoreArrow} alt="right arrow" />
        </div>
      )}
    </div>
  );
}
