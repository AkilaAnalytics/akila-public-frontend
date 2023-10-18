interface Props {
  heading?: string
  changeOrder?: boolean

  dataList?: Array<any>
  listData?: Array<any>
  img?: string
  normalList?: boolean
  description?: string
}
export default function CommonListImgComponent({
  heading,
  changeOrder,
  listData,
  img,
  normalList,
  description
}: Props) {
  return (
    <div className="bg- mx-auto my-[50px]  max-w-[1266px] ">
      <div className=" grid  grid-cols-1 justify-items-center gap-4 p-2 sm:grid-cols-2 ">
        <div
          className={`flex max-w-[471px] flex-col justify-center  ${
            changeOrder ? 'order-2' : 'order-1'
          }`}>
          <div className="font-raleway  mb-[40px] text-[32px] font-semibold leading-[40px] text-[#E3E3E3] sm:text-[40px] sm:leading-[45px]">
            {heading}
          </div>

          {renderLists(listData, normalList, description)}
        </div>
        <div
          className={`h-auto w-full max-w-[520px]  ${
            changeOrder ? 'order-1' : 'order-2'
          }`}>
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

const renderLists = (listData, normalList, description) => {
  if (normalList) {
    return (
      <>
        {description && <div>{description}</div>}
        <ul className="list-disc">
          {listData?.map((data, index) => (
            <li
              className="font-raleway my-[24px] ml-8 text-[14px]  font-medium leading-[25px] text-[#e7e7e7] sm:text-lg"
              key={data.description + index}>
              {data.description}
            </li>
          ))}
        </ul>
      </>
    )
  } else {
    return (
      <div>
        {listData?.map((data, index) => (
          <div
            className="flex items-center gap-4"
            key={data.desecription + index}>
            <div className="h-[32px] w-full max-w-[32px] ">
              <img src={data.icon} className="" alt="" />
            </div>
            <div className="font-raleway my-[24px] text-lg font-medium leading-[25px] text-[#e7e7e7] ">
              {data.description}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
