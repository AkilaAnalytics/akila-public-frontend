import { FeaturesSectionIcon } from '~/view/assets'
export default function FeaturesSection({ heading, featuresListData }) {
  return (
    <div className="container_class ">
      <div className=" my-[50px]  rounded-[5px] bg-[#191919] px-[25px] py-[24px]">
        <div className="flex justify-between pb-[24px]">
          <div className="flex items-center">
            <div className="mr-[11px]">
              <img src={FeaturesSectionIcon} alt="" />
            </div>
            <div className="font-raleway text-base font-bold leading-[22px] text-white">
              {heading}
            </div>
          </div>
        </div>
        <div
          className={`bg-[ #191919] flex flex-col justify-between ${
            featuresListData[0].heading ? ' gap-[30px] ' : ''
          }sm:flex-row`}>
          {featuresListData?.map((feature, index) => (
            <div
              className="  w-full bg-[#020710]"
              key={feature.heading + index}>
              {feature.heading && (
                <div className="font-open-sans rounded-tl-[6px] rounded-tr-[6px] bg-gradient-to-r from-indigo-700 to-blue-500 px-[15px] py-[13px] font-bold">
                  {feature.heading}
                </div>
              )}
              {feature.descriptionList && (
                <ul className="px-[12px] py-[15px]">
                  {feature.descriptionList.map((list, index) => (
                    <li
                      className="font-raleway pb-[12px] text-sm font-normal leading-5 text-[#CACACA]"
                      key={list + index}>
                      {list}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/*  */}
      </div>
    </div>
  )
}
