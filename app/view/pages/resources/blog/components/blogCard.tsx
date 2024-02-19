export default function BlogCard({
  img,
  title,
  description,
  date,
  timeToRead
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 rounded-md border border-solid border-gray-700 p-5 md:flex-row">
      <div className="min-h-[184px] w-full max-w-[313px]   ">
        <img src={img} alt="" />
      </div>
      <div className="flex w-full flex-col justify-between ">
        <div>
          <h3 className="font-raleway text-2xl font-medium leading-[46px] text-white">
            {title}
          </h3>
          <h4 className="font-manrope truncate-description text-sm font-normal leading-[22px] text-[#969696]">
            {description}
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="font-manrope mr-1 text-sm font-normal leading-[22px] text-[#969696]">
              {date}
            </div>
            <div className="font-raleway text-sm font-normal leading-[22px] text-[#969696]">
              {timeToRead} read
            </div>
          </div>
          <div className="font-raleway text-base font-normal leading-6 text-[#E7E7E7]">
            Read More
          </div>
        </div>
      </div>
    </div>
  )
}
