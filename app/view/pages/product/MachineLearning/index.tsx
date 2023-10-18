import {
  MlBg,
  AiDataSetsCard,
  AiGuideCard,
  BuildPowerfullMachines,
  EmpowerBussinessWithMachineLearning,
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

export default function MachineLearning() {
  return (
    <div>
      <div>
        <BannerImage
          title="ML the Easy Way"
          subTitle="Take your business to the next level with Akila Analytics' powerful machine learning workflow. Build models with ease and make data-driven decisions."
          image={MlBg}
        />
      </div>
      <DescriptionImageComponent
        heading="Build Powerful Machine 
        Learning Models with Ease"
        description="Take your business to the next level with Akila Analytics' powerful machine learning workflow. Our no-code platform makes it easy for anyone to build and train machine learning models quickly and easily. Plus, our cost-efficient solution saves you money and time."
        img={BuildPowerfullMachines}
      />
      <DescriptionImageComponent
        changeOrder
        heading="Empower Your Business with Machine Learning"
        description="Akila Analytics' machine learning workflow empowers you to build and train powerful models that help you make data-driven decisions. Our no-code platform makes it simple for anyone to use, regardless of technical expertise. Plus, our cost-efficient solution saves you time and money."
        img={EmpowerBussinessWithMachineLearning}
      />
      <ReleatedResources>
        <div className="grid grid-cols-1 justify-items-center gap-[15px] lg:grid-cols-3">
          {releatedResourcesSectionData?.map((data, index) => (
            <ReleatedResourcesCard
              key={data.description + index}
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
