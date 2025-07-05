interface IProps {
  heading: string;
  img: string;
  description: string;
  link: string;
}

export default function HelpYourTeamCard({
  heading,
  img,
  description,
}: IProps) {
  return (
    <div className="min-h-[355px] w-full p-[16px]">
      <div className="mb-[16px] min-h-[146px] w-full ">
        <img src={img} alt={heading} className="w-full" />
      </div>
      <div className="mb-[32px]">
        <h2 className="mb-[12px] font-sans text-[20px] font-semibold leading-[28px]">
          {heading}
        </h2>
        <p className="font-sans text-[14px] font-normal leading-[20px] text-[#E7E7E7]">
          {description}
        </p>
      </div>
      {/*<Link className="hidden">Learn More</Link> */}
    </div>
  );
}
