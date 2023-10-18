import { useState } from 'react'

import { MarketingAnalytics } from '~/view/assets'
import BannerImage from '~/view/components/BannerImage'
import GettingStarted from '~/view/features/GettingStarted'

import { SecondaryNavbar } from './components'

function Section({ title, children, id }: any) {
  return (
    <div
      id={id}
      className="mx-4 my-12 flex w-full flex-col sm:mx-8 sm:w-3/4 md:grid md:grid-cols-3 md:gap-4">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="text-md text-justify sm:text-lg md:col-span-2">
        {children}
      </div>
    </div>
  )
}
export default function PrivateEquityPage() {
  const [activeTab, setActiveTab] = useState('Challenges')
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    scrollToSection(tab)
  }
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className="relative">
      <div className="mt-30" />
      <BannerImage
        title="Marketing Analytics"
        subTitle="Explore how Akila is increasing efficiency during the due diligence process"
        image={MarketingAnalytics}
      />

      <SecondaryNavbar
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <div className="flex flex-col justify-center overflow-hidden px-8 sm:pl-32">
        <Section id="Challenges" title="Challenges">
          <div>
            <p>
              Firms are often facing significant challenges during their
              due-diligence phase, such as:
            </p>
            <ul className="list-disc">
              <li>
                Limited time to conduct analysis: Private equity firms typically
                have a short window of time to complete their due-diligence
                analysis and make an informed decision about an investment
                opportunity.
              </li>
              <li>
                Complex data structures: Private equity firms often need to
                analyze large and complex data sets from various sources, which
                can be difficult to manage and process.
              </li>
              <li>
                Lack of technical expertise: Private equity analysts and
                investors may lack the technical skills necessary to perform
                complex data analysis tasks.
              </li>
            </ul>
          </div>
        </Section>
        <Section id="Opportunities" title="Opportunities">
          <ul className="list-disc">
            <p>
              Despite these challenges, private equity firms can benefit from
              using data science and no-code platforms during their
              due-diligence phase in several ways, such as:
            </p>
            <li>
              Faster and more efficient analysis: With a no-code platform like
              Akila Analytics, private equity firms can rapidly process large
              amounts of data and gain insights more quickly, enabling them to
              make more informed investment decisions in a shorter amount of
              time.
            </li>
            <li>
              Improved accuracy: By leveraging machine learning algorithms and
              other advanced analytics tools, private equity firms can achieve
              greater accuracy and precision in their due-diligence analysis.
            </li>
            <li>
              Better risk management: No-code platforms can help private equity
              firms identify and mitigate investment risks more effectively by
              providing insights into potential market trends, regulatory
              changes, and other factors that could impact investment
              performance.
            </li>
          </ul>
        </Section>
        <Section id="Akila Advantage" title="Akila Advantage">
          <p>
            Akila Analytics offers a range of features and tools that can
            benefit private equity firms during their due-diligence phase,
            including:
          </p>
          <ul className="list-disc">
            <p>
              Despite these challenges, private equity firms can benefit from
              using data science and no-code platforms during their
              due-diligence phase in several ways, such as:
            </p>
            <li>
              Automated data processing: With Akila's no-code platform, private
              equity firms can easily process and merge large data sets from
              various sources, saving time and effort.
            </li>
            <li>
              Auto ML capabilities: Akila Analytics offers advanced machine
              learning algorithms that can quickly identify patterns and trends
              in data sets, providing insights that can inform investment
              decisions.
            </li>
            <li>
              Intuitive interface: Akila's no-code platform is user-friendly and
              requires no coding skills, making it easy for private equity
              analysts and investors to perform complex data analysis tasks.
            </li>
            <li>
              Scalability: Akila Analytics can handle large data sets and scale
              to meet the needs of growing private equity firms.
            </li>
          </ul>
          <p>
            By leveraging the power of data science and no-code platforms like
            Akila Analytics, private equity firms can overcome their
            due-diligence challenges and make more informed investment
            decisions.
          </p>
        </Section>
      </div>
      <GettingStarted />
    </div>
  )
}
