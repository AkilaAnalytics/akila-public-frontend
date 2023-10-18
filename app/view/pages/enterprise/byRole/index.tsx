import {
  ByRoleBi,
  ByRoleExecutiveLeadership,
  ByRoleFinance,
  ByRoleHr,
  ByRoleImproveProfitibility,
  ByRoleIt,
  ByRoleMarketting,
  ByRoleOps,
  ByRolePageBg,
  ByRoleSales,
  ByRoleService,
  ByRoleStreamline,
  ByRoleUncoverNewinsights,
  ByRolebuildNewSolutions,
  EnhancedSecurity,
  ImproveCollboration,
  ModernDayAnalytics,
  akilaAnalyticsLogo,
  gettingStarted
} from '~/view/assets'
import {
  AkilaBussinessCloudSection,
  BannerImage,
  CommonGrayCard,
  GettingStartedSection
} from '~/view/components'

import {
  BuildDataSolutionCard,
  BuildDataSolutionSection,
  HelpYourTeamCard
} from './components'
import HelpYourTeamSection from './components/helpYourTeamSection'

export default function ByRole() {
  return (
    <>
      <BannerImage
        image={ByRolePageBg}
        title="Improve every process, power every outcome."
        subTitle="Unlock the power of your data and transform your business with Akila Analytics. Our platform is designed for every role."
        superTitle="Akila’s Role-Based Solutions"
      />
      <BuildDataSolutionSection heading="Build data solutions to help your team improve and expand how they work.">
        <div className="flex flex-col items-center gap-[30px] md:flex-row ">
          <BuildDataSolutionCard
            description="Streamline existing analytical processes."
            logo={ByRoleStreamline}
          />
          <BuildDataSolutionCard
            description="Improve profitability and key metrics"
            logo={ByRoleImproveProfitibility}
          />
          <BuildDataSolutionCard
            description="Uncover new insights  across data sources and teams"
            logo={ByRoleUncoverNewinsights}
          />
          <BuildDataSolutionCard
            description="Build new  solutions at speed and scale."
            logo={ByRolebuildNewSolutions}
          />
        </div>
      </BuildDataSolutionSection>
      <HelpYourTeamSection>
        <div className="mb-[30px] flex flex-col items-center justify-center gap-[36px] lg:flex-row">
          <HelpYourTeamCard
            img={ByRoleExecutiveLeadership}
            heading="Executive Leadership"
            description="Improve operations with insights to better build and retain people."
          />
          <HelpYourTeamCard
            heading="Sales"
            description="Improve forecasts, hold teams accountable, and report accurately."
            img={ByRoleSales}
          />
          <HelpYourTeamCard
            heading="Marketing"
            description="Improve operations with insights to better build and retain people."
            img={ByRoleMarketting}
          />
          <HelpYourTeamCard
            heading="Finance"
            description="Get a holistic, accurate picture of your company’s financial health."
            img={ByRoleFinance}
          />
        </div>
        <div className="mb-[30px] flex flex-col items-center justify-center gap-[36px] md:flex-row">
          <HelpYourTeamCard
            heading="Bi"
            description="Get a holistic, accurate picture of your company’s financial health."
            img={ByRoleBi}
          />
          <HelpYourTeamCard
            heading="IT"
            description="Provide insights to the business while maintaining control of your data."
            img={ByRoleIt}
          />
          <HelpYourTeamCard
            heading="Human Resource"
            description="Improve operations with insights to better build and retain people."
            img={ByRoleHr}
          />
        </div>
        <div className="mb-[30px] flex flex-col items-center justify-center gap-[36px] md:flex-row">
          <HelpYourTeamCard
            heading="Ops"
            description="Monitor your business in real time and improve reaction time."
            img={ByRoleOps}
          />
          <HelpYourTeamCard
            heading="Services"
            description="Monitor your business in real time and improve reaction time."
            img={ByRoleService}
          />
        </div>
      </HelpYourTeamSection>
      {/*  */}

      <AkilaBussinessCloudSection
        heading="Akila is where work gets done faster and smarter."
        description="Akila Analytics can help you harness the power of your data with apps to drive business action.">
        <div className="grid gap-[30px] md:grid-flow-col">
          {akilaWherWorkDoneData?.map((data, index) => (
            <CommonGrayCard
              key={index}
              heading={data.heading}
              description={data.description}
              logo={data.logo}
              link={data.link}
            />
          ))}
        </div>
      </AkilaBussinessCloudSection>

      <GettingStartedSection />
    </>
  )
}

const akilaWherWorkDoneData = [
  {
    heading: 'Business Analysts',
    description:
      'Gain deeper insights and drive business growth with advanced analytics tools, such as machine learning and predictive modeling.',
    logo: ModernDayAnalytics,
    link: '/positions/business-analyst'
  },
  {
    heading: 'Product Managers',
    description:
      'Develop winning products and optimize your product offerings with customer insights and data-driven decision-making.',
    logo: ImproveCollboration,
    link: '/positions/product-manager'
  },
  {
    heading: 'Marketing',
    description:
      'Optimize marketing campaigns and improve customer engagement with targeted campaigns and personalized recommendations.',
    logo: EnhancedSecurity,
    link: '/use-cases/marketing-analytics'
  }
]
