import {
  OverviewAkilaFeaturesSection,
  OverviewCloudProviders
} from '~/view/assets'

export default function AkilaAnalyticsFeaturesSection({ children }) {
  return (
    <div className="container_class ">
      <div className="border-b-[1px] border-b-[#36383D] py-[100px]">
        <div>{children}</div>
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border-[3px] border-[#3134DB]  px-[10px] py-[44px]">
          <div className="mb-[32px]">
            <img src={OverviewAkilaFeaturesSection} alt="" />
          </div>
          <p>
            {' '}
            Security | Cloud | Data Exploration | Analytics | Data Science |
            Scheduled Jobs
          </p>
        </div>
        <div className="mt-[24px] flex justify-center ">
          <img src={OverviewCloudProviders} alt="" />
        </div>
      </div>
    </div>
  )
}
