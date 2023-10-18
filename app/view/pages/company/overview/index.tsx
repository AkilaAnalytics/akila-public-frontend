import {
  OverviewPageBestOfSection,
  OverviewPageBg,
  OverviewUseCasesCustomerProfitibility,
  MarketingAnalytics,
  OverviewUseCasesPrivateEquity
} from '~/view/assets'
import {
  BannerImage,
  CenterAlignHeadingDescription,
  DescriptionImageComponent
} from '~/view/components'

import { UseCasesCard, UseCasesSection } from './components'

export default function Overview() {
  return (
    <div>
      <BannerImage
        image={OverviewPageBg}
        title="Who we are"
        subTitle="Akila Analytics is a cutting-edge, no-code data science platform, democratizing data-driven solutions for businesses and empowering users with diverse skill sets.
"
      />
      <CenterAlignHeadingDescription
        heading="Built on a solid foundation"
        description="Our intuitive platform bridges the gap between technical and non-technical users, making complex data science tasks accessible. With drag-and-drop functionality, guided workflows, and a visually engaging interface, Akila simplifies data analysis and machine learning for all."
      />
      <DescriptionImageComponent
        img={OverviewPageBestOfSection}
        heading="Best of the best"
        description="Combining powerful data processing, machine learning, and automation capabilities, Akila delivers unparalleled performance and efficiency. We prioritize security, scalability, and collaboration, ensuring our platform remains the top choice for enterprise data science needs."
        changeOrder
        buttonText="view careers"
      />
      <UseCasesSection
        heading="Use Cases"
        description="Explore case studies below how Akila has helped clients in a wide range of industries. ">
        <div className="flex flex-col items-center gap-[30px] md:flex-row">
          <UseCasesCard
            img={MarketingAnalytics}
            date="Monday, February 6, 2023"
            heading="Marketing Analytics"
            description="Explore how Akila is driving marketing analytics."
            link="/use-cases/marketing-analytics"
          />
          <UseCasesCard
            img={OverviewUseCasesPrivateEquity}
            date="Monday, February 6, 2023"
            heading="Private Equity"
            description="Explore how Akila is driving increased efficiency during due diligence and helping streamline operating processes. "
            link="/use-cases/private-equity"
          />
          <UseCasesCard
            img={OverviewUseCasesCustomerProfitibility}
            date="Monday, February 6, 2023"
            heading="Customer Profitability"
            description="Akila is helping firms identify markets and customers to drive increased profitability."
            link="/use-cases/customer-profitability"
          />
        </div>
      </UseCasesSection>
    </div>
  )
}
