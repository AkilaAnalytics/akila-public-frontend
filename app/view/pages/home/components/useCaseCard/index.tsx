import { Link } from '@remix-run/react'

interface IProps {
  category: string
  heading: string
  description: string
  link: string
  img: string
}

export default function UseCaseCard({
  category,
  heading,
  description,
  link,
  img
}: IProps) {
  //<div className="min-h-[231px] ">
  //  <img src={img} className="w-full" alt="" />
  //</div>
  //<div className="p-[16px]">
  //  <h3 className="font-raleway mb-[12px] text-xl font-medium leading-7 text-[#ffffff]">
  //    {heading}
  //  </h3>
  //  <p className="font-raleway font-normal leading-[22px] text-[#E7E7E7]">
  //    {description}
  //  </p>
  //</div>
  return (
    <div className="">
      <Link to={link} className="p-4">
        <p className="button-gradient w-3/4 p-2 text-center">{category}</p>
        <div className="z-0 bg-gradient-to-r from-periwinkleDark to-periwinkle p-[1px]">
          <div className="z-10 bg-black">
            <div className="h-[66vh] w-full p-4 md:h-[70vh] md:w-[25vw]">
              <div className="mx-auto mt-5 h-2/3 w-11/12">
                <img
                  src={img}
                  alt={heading}
                  className="h-full w-full object-cover"
                />
              </div>
              <h6 className="w-full pl-4 text-left font-semibold tracking-wider">
                {heading}
              </h6>
              <p className="p-4 text-sm">{description}</p>
              <br />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
