import {
  DataExplorationBg,
  AiDataSetsCard,
  AiGuideCard,
  DiscoverInsights,
  UnlockInsights,
  ChartsDashboard
} from '~/view/assets'
import {
  BannerImage,
  GettingStartedSection,
  ReleatedResourcesCard,
  DescriptionImageComponent,
  ReleatedResources
} from '~/view/components'

export default function EtlPipeline() {
  return (
    <div>
      <BannerImage
        title="Automate ETL pipelines"
        subTitle="Streamline your data processes with intuitive ETL pipeline tools."
        image={DataExplorationBg}
      />
      <DescriptionImageComponent
        heading="Connect to data effortlessly"
        description="With Akila Analytics' connecting to your data is intuitive and easy."
        img={DiscoverInsights}
      />
      <DescriptionImageComponent
        changeOrder
        heading="Analyze & discover insights"
        description="Transform your data with Akila's built-in data processing tools.."
        img={UnlockInsights}
      />
      <DescriptionImageComponent
        heading="Output your data anywhere you need it"
        description="Using Akila's built-in data connections or building bespoke solutions, save your data anywhere."
        img={ChartsDashboard}
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
