export default function DataSciencePageFeatures({ dataList }) {
  return (
    <div className="mt-[100px]">
      <div className="container_class flex min-h-[280px] items-center justify-center bg-[#191919]">
        <div className="  grid min-h-[240px] w-full max-w-[1062px] grid-cols-1 gap-x-[70px]  gap-y-[24px] sm:grid-cols-2">
          {dataList?.map((data, index) => (
            <div
              key={index}
              className="flex min-h-[48px] flex-col sm:flex-row sm:items-center">
              <div className="mr-[16px]">
                <img src={data.icon} alt="" />
              </div>
              <div> {data.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
