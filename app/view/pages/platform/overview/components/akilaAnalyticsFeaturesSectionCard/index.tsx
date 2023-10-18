import { OverviewAkilaFeaturesButtonBg, OverviewArrowUp } from '~/view/assets'

export default function AkilaAnalyticsFeaturesSectionCard({ text }) {
  return (
    <div className="flex min-h-[155px] w-full max-w-[255px] flex-col justify-between border-t-[3px] border-t-[#3134DB]  pt-[20px]">
      <div
        className=" flex items-center justify-center  bg-cover bg-center  py-[11px] "
        style={{ background: `url(${OverviewAkilaFeaturesButtonBg})` }}>
        <p className="">{text}</p>
      </div>
      <div className=" flex justify-center ">
        <img src={OverviewArrowUp} alt="" />
      </div>
    </div>
  )
}
