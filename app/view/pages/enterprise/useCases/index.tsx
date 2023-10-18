import {
  AiDataSetsCard,
  AiGuideCard,
  akilaAnalyticsLogo,
  EnhancedSecurity,
  gettingStarted,
  ImproveCollboration,
  ModernDayAnalytics,
  ScalableAndFlexibleInfrastructure,
  UseCasesBg,
  UseCasesPartnerAnalytics
} from '~/view/assets'
import {
  AkilaBussinessCloudSection,
  BannerImage,
  CenterAlignHeadingDescription,
  CommonGrayCard,
  CommonListImgComponent,
  GettingStartedSection,
  ReleatedResources,
  ReleatedResourcesCard
} from '~/view/components'

import { RoundedCard } from './components'

export default function UseCases() {
  return (
    <div>
      <div>
        <BannerImage
          title="Akila for Enterprise"
          subTitle="Gain Deeper Insights, Improve Business Outcomes

          Unlock the full potential of your data with Akila Analytics. Scale your data analytics capabilities with ease and drive business growth."
          image={UseCasesBg}
        />
      </div>
      <CenterAlignHeadingDescription
        title="Enterprise Use Cases"
        heading="Enterprise-grade data protection that scales."
        description="By deploying our infrastructure into your account, we help ensure that sensitive data remains secure and in compliance with data privacy regulations, and enables customers to maintain complete visibility and ownership of their data."
      />
      <div className="container_class">
        <div className=" just mb-[48px]  grid grid-cols-1 justify-items-center gap-x-[16px] gap-y-4  sm:grid-cols-3 lg:flex lg:justify-between ">
          <RoundedCard text="Partner Analytics" active />
          <RoundedCard text="Self-Services Analytics" />
          <RoundedCard text="Integrate Data & Applications" />
          <RoundedCard text="Build & Deploy Apps" />
          <RoundedCard text="Predictive Analytics & Data Science" />
          <RoundedCard text="Data Governance & Security" />
        </div>
      </div>
      <CommonListImgComponent
        img={UseCasesPartnerAnalytics}
        heading="Partner Analytics"
        listData={partnerAnalytics}
        normalList
      />
      <AkilaBussinessCloudSection
        heading="The Akila’s Business Cloud is where work gets done faster and smarter."
        description="Akila Analytics can help you harness the power of your data with apps to drive business action.">
        <div className="grid justify-items-center gap-[30px] md:grid-flow-col">
          {akilasPlatformSectionData?.map((data, index) => (
            <CommonGrayCard
              key={index}
              heading={data.heading}
              description={data.description}
              logo={data.logo}
            />
          ))}
        </div>
      </AkilaBussinessCloudSection>

      <ReleatedResources>
        <div className="grid grid-cols-1 justify-items-center gap-[15px] lg:grid-cols-3">
          <ReleatedResourcesCard
            category="Data Sheet"
            description="AI-Assisted Data Preparation for Machine Learning"
            bgImg={AiDataSetsCard}
          />
          <ReleatedResourcesCard
            category="guide"
            description="End-to-End AI: The Complete Guide to Akila Analytics’s AI Cloud Platform"
            bgImg={AiGuideCard}
          />
          <ReleatedResourcesCard
            category="Data Sheet"
            description="AI Cloud Platform"
            bgImg={AiDataSetsCard}
          />
        </div>
      </ReleatedResources>
      <GettingStartedSection />
    </div>
  )
}

//
const partnerAnalytics = [
  {
    description:
      'External self-service analyticsExternal self-service analytics'
  },
  {
    description: 'Deliver value to customers'
  },
  {
    description: 'Deliver value to partners'
  },
  {
    description: 'Data commercialization'
  }
]

const akilasPlatformSectionData = [
  {
    heading: 'Customizable Analytics Solutions  ',
    description:
      "Tailored analytics solutions that meet your organization's specific needs and drive business outcomes.",
    logo: ModernDayAnalytics
  },
  {
    heading: 'Enhanced Security and Compliance',
    description:
      'Secure and compliant data analytics solutions that you trust. Akila’s resources are exclusively deployed into your cloud environment. No outbound connections are required.',
    logo: ImproveCollboration
  },
  {
    heading: 'Expert Support and Training',
    description:
      'Expert support and personalized training that helps you get the most out of your data. Our tool is designed to be as user friendly as possible - we support that by offering all training for free. ',
    logo: EnhancedSecurity
  },
  {
    heading: 'Flexible Deployment Options',
    description:
      "Flexible deployment options, that meet your organization's unique needs and preferences. Security and user experience are top of mind for us. ",
    logo: ScalableAndFlexibleInfrastructure
  }
]
