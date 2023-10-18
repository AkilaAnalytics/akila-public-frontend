import {
  LeverageTheCloudBg,
  gettingStarted,
  akilaAnalyticsLogo,
  IntegrateDataAndInfrastructure,
  EmpowerBusinessDataScience,
  ScalableAndFlexibleInfrastructure,
  EnhancedSecurity,
  ImproveCollboration,
  ModernDayAnalytics,
  CommonListImgComponentIcon1,
  CommonListImgComponentIcon2,
  CommonListImgComponentIcon3
} from '~/view/assets'
import {
  BannerImage,
  GettingStartedSection,
  CommonListImgComponent,
  CommonGrayCard,
  AkilaBussinessCloudSection
} from '~/view/components'

export default function LeverageTheCloud() {
  return (
    <div>
      <div>
        <BannerImage
          title="Leverage the Cloud"
          subTitle="We offer a range of cloud-based deployment options that enable users to leverage the power of the cloud for their data analytics needs. "
          image={LeverageTheCloudBg}
        />
      </div>
      <CommonListImgComponent
        img={IntegrateDataAndInfrastructure}
        heading="Integrate data and infrastructure"
        listData={IntegrateDataAndInfrastructureSectionData}
      />
      <AkilaBussinessCloudSection
        heading="Akila is where work gets done faster and smarter."
        description="Akila Analytics can help you harness the power of your data with apps to drive business action.">
        <div className="grid gap-[30px] md:grid-flow-col">
          {akilaBussinessCloudSectionData.map((data) => (
            <CommonGrayCard
              key={data.link}
              heading={data.heading}
              description={data.description}
              logo={data.logo}
              link={data.link}
            />
          ))}
        </div>
      </AkilaBussinessCloudSection>
      <CommonListImgComponent
        changeOrder
        img={EmpowerBusinessDataScience}
        heading="Empower business users with data"
        listData={empowerBusinessUserSectionData}
      />
      <GettingStartedSection />
    </div>
  )
}

const empowerBusinessUserSectionData = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      "Clean and process data with Akila's intuitive no-code platform"
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'Leverage advanced analytics tools, such as machine learning and predictive modeling, to gain deeper insights from your data'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Collaborate with your team and automate your workflows to save time and resources'
  }
]
const IntegrateDataAndInfrastructureSectionData = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      'Easily scale  data analytics capabilities up or down to meet changing needs'
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'All infrastructure is deployed to run as efficiently as possible to ensure costs are optimized'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Ensure all areas of your organization have access to data processing tools'
  }
]
const akilaBussinessCloudSectionData = [
  {
    heading: 'Data Exploration',
    description:
      'Use Akila’s no-code data exploration tool to better understand your data',
    logo: ModernDayAnalytics,
    link: '/product/data-exploration'
  },
  {
    heading: 'Data Processing',
    description:
      'Data can be cleaned, processed, and transformed with the push of a button',
    logo: ImproveCollboration,
    link: '/product/data-processing'
  },
  {
    heading: 'Machine Learning',
    description:
      'Models don’t need to be complex. Build models that suit your needs.  ',
    logo: EnhancedSecurity,
    link: '/product/machine-learning'
  },
  {
    heading: 'Recurring Jobs',
    description:
      'Recurring tasks are part of every business, and we’re here to make that easier for you. Schedule jobs to run automatically. ',
    logo: ScalableAndFlexibleInfrastructure,
    link: '/product/recurring-jobs'
  }
]
