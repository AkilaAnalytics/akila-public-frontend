import { PaltformOverviewBg } from '~/view/assets'
import { BannerImage, GettingStartedSection } from '~/view/components'

import {
  AkilaAnalyticsFeaturesSection,
  AkilaAnalyticsFeaturesSectionCard,
  ExperienceThePerksCard
} from './components'
import ExperiencePerksSection from './components/experienceThePerksSection'

export default function PlatformOverview() {
  return (
    <>
      <BannerImage
        horizontalLine
        image={PaltformOverviewBg}
        title="Leverage AI Data Analytics"
        subTitle="Achieve maximum efficiency by pairing tools like SQL & python with AI Analytics."
      />
      <ExperiencePerksSection
        heading="Automate your workflows using Akila Analytics"
        description="Sometimes more traditional tools like SQL & python are sufficient to do the job. Other times, we need to leverage cutting-edge AI data analytics tools to achieve maximum efficiency."
      >
        <div className="grid grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 md:grid-cols-4">
          {experienceThePerksData?.map((data) => (
            <ExperienceThePerksCard
              key={data.heading}
              heading={data.heading}
              description={data.description}
            />
          ))}
        </div>
      </ExperiencePerksSection>
      <AkilaAnalyticsFeaturesSection>
        <div className="flex flex-col items-center justify-between gap-x-[30px] sm:flex-row">
          <AkilaAnalyticsFeaturesSectionCard text="Data Exploration" />
          <AkilaAnalyticsFeaturesSectionCard text="Data Exploration" />
          <AkilaAnalyticsFeaturesSectionCard text="Data Exploration" />
          <AkilaAnalyticsFeaturesSectionCard text="Data Exploration" />
        </div>
      </AkilaAnalyticsFeaturesSection>
      <div className="container_class">
        <div className="my-[80px] grid grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 md:grid-cols-3">
          {overviewBottomCards?.map((data) => (
            <ExperienceThePerksCard
              key={data.heading}
              heading={data.heading}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <GettingStartedSection />
    </>
  )
}

const experienceThePerksData = [
  {
    heading: 'Data Exploration',
    description:
      'Effortlessly explore and analyze your data with our intuitive data exploration workflow'
  },
  {
    heading: 'Data Processing',
    description:
      'Clean, process, and transform your data with ease using our data processing workflow'
  },
  {
    heading: 'Machine Learning',
    description:
      'Build powerful machine learning models quickly and easily with our machine learning workflow'
  },
  {
    heading: 'Recurring Jobs',
    description:
      'Automate recurring tasks and jobs with our recurring job workflow, saving you time and resources'
  }
]

const overviewBottomCards = [
  {
    heading: 'AI Data Analytics',
    description: 'Leverage cutting-edge analytics using no-code tools.'
  },
  {
    heading: 'Effortless Data Exploration',
    description:
      "Discover insights and trends in your data effortlessly with Akila Analytics' intuitive data exploration workflow. No coding required."
  },
  {
    heading: 'Streamlined Data Processing',
    description:
      "Transform, clean, and prepare your data for analysis with Akila Analytics' streamlined data processing workflow. Save time and resources."
  },
  {
    heading: 'Powerful Machine Learning',
    description:
      "Build and train powerful machine learning models quickly and easily with Akila Analytics' user-friendly machine learning workflow. No coding needed."
  },
  {
    heading: 'Automate Recurring Jobs',
    description:
      "Automate your recurring tasks and jobs, such as data extraction or report generation, with Akila Analytics' efficient recurring job workflow."
  },
  {
    heading: 'Secure and Reliable Platform',
    description:
      'Security is done your way. Rest easy knowing your data is secure since it’s only ever accessed or stored within your infrastructure.'
  }
]
