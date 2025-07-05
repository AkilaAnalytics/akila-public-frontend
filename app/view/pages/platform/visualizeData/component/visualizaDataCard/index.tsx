export default function VisualizaDatacard({ icon, heading, description }) {
  return (
    <div className="flex h-[312px] w-[318px] items-center justify-center rounded-lg border-[1px] border-blue-600 bg-[#020710] px-4">
      <div className="flex  min-h-[140px] w-full flex-col items-center rounded-[8px] ">
        <div className="mb-[24px]">
          <img src={icon} alt="" />
        </div>
        <div className="mb-[8px]">{heading}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}
