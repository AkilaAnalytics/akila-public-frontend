import {
  DataExplorationBg,
  AiDataSetsCard,
  AiGuideCard,
  DiscoverInsights,
  UnlockInsights
} from '~/view/assets'
import {
  BannerImage,
  GettingStartedSection,
  ReleatedResourcesCard,
  DescriptionImageComponent,
  ReleatedResources
} from '~/view/components'

export default function DataExploration() {
  return (
    <div>
      <BannerImage
        title="Understand your data"
        subTitle="Unlock the power of your data and discover insights effortlessly with Akila Analytics' intuitive data exploration workflow. Try it now."
        image={DataExplorationBg}
      />
      <DescriptionImageComponent
        heading="Discover Insights Effortlessly"
        description="With Akila Analytics' intuitive data exploration workflow, you can unlock the power of your data and gain insights effortlessly. Our user-friendly interface and no-code platform make it easy for anyone to explore data without technical expertise. Plus, our cost-efficient solution saves you time and resources."
        img={DiscoverInsights}
      />
      <DescriptionImageComponent
        changeOrder
        heading="Unlock Insights Hidden 
        in Your Data"
        description="Akila Analytics' data exploration workflow helps you uncover insights and trends in your data with ease. Our user-friendly interface and no-code platform make it easy for non-technical users to explore data. Plus, our cost-efficient solution saves you time and money."
        img={UnlockInsights}
      />
      <ReleatedResources>
        <div className="grid grid-cols-1 justify-items-center gap-[15px] lg:grid-cols-3">
          {releatedResourcesSectionData?.map((data, index) => (
            <ReleatedResourcesCard
              key={`${index}-${data.description}`}
              category={data.category}
              description={data.description}
              bgImg={data.bgImg}
              link={data.link}
            />
          ))}
        </div>
      </ReleatedResources>

      <GettingStartedSection />
    </div>
  )
}

const releatedResourcesSectionData = [
  {
    category: 'guide',
    description: 'Data Exploration',
    bgImg: AiDataSetsCard,
    link: '/product/data-exploration'
  },
  {
    category: 'guide',
    description: 'Data Processing',
    bgImg: AiGuideCard,
    link: '/product/data-processing'
  },
  {
    category: 'guide',
    description: 'Machine Learning',
    bgImg: AiDataSetsCard,
    link: '/product/machine-learning'
  }
]
