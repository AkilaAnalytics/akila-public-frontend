import {
  ArrowRight,
  HomeBg,
  PlatformAnalyseAndCreate,
  PlatformLoadData,
  PlatformProcessData,
  PlatformVisualiseResults
} from '~/view/assets'
import { GettingStartedSection } from '~/view/components'

import {
  ContactUs,
  HomeBanner,
  PlatformSection,
  PlatformSectionCard,
  SolutionsByPositions,
  SolutionsByPositionsCard,
  UseCaseCard,
  UseCaseSection
} from './components'
import { useCaseData, solutionsByPositionsData } from './text'

export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <UseCaseSection heading="Use Cases">
        <div className="flex flex-col items-center justify-center gap-[30px] p-5 md:flex-row md:p-0">
          {useCaseData.map((data, index) => (
            <UseCaseCard
              category={data.category}
              key={index}
              heading={data.heading}
              description={data.description}
              img={data.img}
              link={data.link}
            />
          ))}
        </div>
      </UseCaseSection>
      <PlatformSection>
        <div className="flex flex-col items-center justify-center gap-[21px] sm:flex-row">
          <PlatformSectionCard
            logo={PlatformLoadData}
            title="Load Data"
            link="/enterprise/use-cases"
          />
          <img
            src={ArrowRight}
            className="w-full max-w-[37px] rotate-90 transform sm:rotate-0"
            alt=""
          />
          <PlatformSectionCard
            logo={PlatformProcessData}
            title="Process Data"
            link="product/data-exploration"
          />
          <img
            src={ArrowRight}
            className="w-full max-w-[37px] rotate-90 transform sm:rotate-0"
            alt=""
          />
          <PlatformSectionCard
            logo={PlatformAnalyseAndCreate}
            title="Create Model"
            link="/product/machine-learning"
          />
          <img
            src={ArrowRight}
            className="w-full max-w-[37px] rotate-90 transform sm:rotate-0"
            alt=""
          />
          <PlatformSectionCard
            logo={PlatformVisualiseResults}
            title="Visualize Results"
            link="/platform/visualize-data"
          />
        </div>
      </PlatformSection>

      <SolutionsByPositions heading="Solutions By Position">
        <div className="flex flex-col items-center justify-center gap-[30px] md:flex-row">
          {solutionsByPositionsData?.map((data, index) => (
            <SolutionsByPositionsCard
              key={index}
              img={data.img}
              heading={data.heading}
              description={data.description}
              link={data.link}
            />
          ))}
        </div>
      </SolutionsByPositions>
      <GettingStartedSection />
      <ContactUs />
    </div>
  )
}
