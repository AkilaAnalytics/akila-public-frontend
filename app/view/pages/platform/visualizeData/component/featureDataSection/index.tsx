export default function FeatureDataSection({
  heading,
  changeOrder,
  description,
  img
}) {
  return (
    <div className="mx-auto my-[50px] max-w-[1266px] bg-black py-[100px]  ">
      <div className=" grid min-h-[378px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 ">
        <div
          className={` flex max-w-[445px] flex-col justify-center ${
            changeOrder ? 'order-2' : 'order-1'
          }`}>
          <div className="mb-[24px] text-[40px] font-medium leading-[45px]">
            {heading}
          </div>
          <p>{description}</p>
        </div>
        <div
          className={`h-[350px] max-w-[570px] sm:h-[378px] ${
            changeOrder ? 'order-1' : 'order-2'
          }`}>
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
