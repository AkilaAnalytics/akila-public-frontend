import {
  DataProcessingBg,
  AiDataSetsCard,
  AiGuideCard,
  StreamlineData,
  TransformyourData,
  gettingStarted,
  akilaAnalyticsLogo
} from '~/view/assets'
import {
  BannerImage,
  DescriptionImageComponent,
  GettingStartedSection,
  ReleatedResources,
  ReleatedResourcesCard
} from '~/view/components'

export default function DataProcessing() {
  return (
    <div>
      <div>
        <BannerImage
          title="Easy Data Cleaning & Manipulation"
          subTitle="Simplify your data processing workflow and save time and resources with Akila Analytics. Start transforming your data today, no coding required."
          image={DataProcessingBg}
        />
      </div>
      <DescriptionImageComponent
        heading="Streamline Your Data 
        Processing Workflow"
        description="Transform your data quickly and easily with Akila Analytics' streamlined data processing workflow. Our clean and modern interface makes it easy for non-technical users to process data without coding. Plus, our cost-efficient solution saves you money and time."
        img={StreamlineData}
      />
      <DescriptionImageComponent
        changeOrder
        heading="Transform Your Data 
        Quickly and Easily"
        description="Akila Analytics' streamlined data processing workflow simplifies the process of transforming your data. Our modern interface makes it easy for non-technical users to process data without coding. Plus, our cost-efficient solution saves you time and money."
        img={TransformyourData}
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
