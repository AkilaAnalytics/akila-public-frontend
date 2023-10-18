import {
  HelpCenterBg,
  HelpCenterPageHowToArticlesIcon,
  HelpCenterPageHowToVideoIcon,
  HelpCenterPageNewUserIcon,
  HelpCenterPageLearnAkilaIcon,
  HelpCenterPageTrainingAndDocIcon1,
  HelpCenterPageTrainingAndDocIcon2,
  HelpCenterPageTrainingAndDocIcon3
} from '~/view/assets'
import { BannerImage, GettingStartedSection } from '~/view/components'

import {
  HelpCenterGrayCard,
  PopularArticlesAndBlogsSection,
  PopularList,
  FAQsSection,
  FAQ,
  TrainingAndDocumentationSection,
  TrainingAndDocCard
} from './components'

export default function HelpCenter() {
  return (
    <div>
      <BannerImage
        title="Help Center"
        subTitle="Lorem beatae necessitatibus quia animi velit. Laborum eum magni eaque delectus assumenda Repellat cumque sint aliquid cum facilis Assumenda assumenda"
        image={HelpCenterBg}
      />
      <div className="container_class">
        <div className="mb-[50px] mt-[50px] flex flex-col items-center justify-between gap-[30px] lg:flex-row">
          <HelpCenterGrayCard
            icon={HelpCenterPageNewUserIcon}
            title="Getting Started"
            heading="For New User"
          />
          <HelpCenterGrayCard
            icon={HelpCenterPageLearnAkilaIcon}
            title="Akila University"
            heading="Learn Akila"
          />
          <HelpCenterGrayCard
            icon={HelpCenterPageHowToVideoIcon}
            title="Akila University"
            heading="How to Videos"
          />
          <HelpCenterGrayCard
            icon={HelpCenterPageHowToArticlesIcon}
            title="Knowledge Base"
            heading="How to Articles"
          />
        </div>
      </div>
      {/*  */}

      {/*  */}
      <PopularArticlesAndBlogsSection>
        <PopularList
          heading="Popular Articles & Videos"
          listData={popularListArticlesAndVideosList}
          readMoreText="View More Articles and Videos"
        />
        <PopularList
          heading="Popular Forum Threads"
          listData={popularForumThreads}
          readMoreText="View More Threads"
        />
      </PopularArticlesAndBlogsSection>
      {/*  */}

      <TrainingAndDocumentationSection heading="Training & Documentation">
        <div className="grid gap-[30px] md:grid-flow-col">
          {trainingAndDocumentationSectionData.map((data) => (
            <TrainingAndDocCard
              key={data.heading}
              heading={data.heading}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </div>
      </TrainingAndDocumentationSection>

      <FAQsSection sectionHeading="Frequently Asked Questions">
        {faqs?.map((faq, index) => (
          <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </FAQsSection>
      <GettingStartedSection />
    </div>
  )
}

const popularListArticlesAndVideosList = [
  { description: 'Get Started Using Akila' },
  { description: 'Get Started Using Akila' },
  { description: 'Get Started Using Akila' },
  { description: 'Get Started Using Akila' },
  { description: 'Get Started Using Akila' }
]
const popularForumThreads = [
  { description: 'Beast Mode, ETL, DataFlow' },
  { description: 'Card Building ' },
  { description: 'Data Source and Connection' },
  { description: 'Latest Solution' },
  { description: 'Ideas Exchange' }
]

const faqs = [
  {
    question: 'How can I get help for a problem I may have?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Ut ullamcorper hendrerit porttitor aliquet fermentum praesent tincidunt vitae. Massa orci ornare cras egestas hendrerit nibh. Sapien lectus odio vestibulum laoreet. Lectus tincidunt orci ut odio. Vulputate nisi nec id at. Consectetur in sem morbi magna lectus nec tempus.'
  },
  {
    question: 'Do you offer any resources for teachers?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Ut ullamcorper hendrerit porttitor aliquet fermentum praesent tincidunt vitae. Massa orci ornare cras egestas hendrerit nibh. Sapien lectus odio vestibulum laoreet. Lectus tincidunt orci ut odio. Vulputate nisi nec id at. Consectetur in sem morbi magna lectus nec tempus.'
  },
  {
    question: 'What topics can I teach?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Ut ullamcorper hendrerit porttitor aliquet fermentum praesent tincidunt vitae. Massa orci ornare cras egestas hendrerit nibh. Sapien lectus odio vestibulum laoreet. Lectus tincidunt orci ut odio. Vulputate nisi nec id at. Consectetur in sem morbi magna lectus nec tempus.'
  },
  {
    question: 'Do I need to promote my course or profile?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Ut ullamcorper hendrerit porttitor aliquet fermentum praesent tincidunt vitae. Massa orci ornare cras egestas hendrerit nibh. Sapien lectus odio vestibulum laoreet. Lectus tincidunt orci ut odio. Vulputate nisi nec id at. Consectetur in sem morbi magna lectus nec tempus.'
  },
  {
    question: 'How do I earn money?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Ut ullamcorper hendrerit porttitor aliquet fermentum praesent tincidunt vitae. Massa orci ornare cras egestas hendrerit nibh. Sapien lectus odio vestibulum laoreet. Lectus tincidunt orci ut odio. Vulputate nisi nec id at. Consectetur in sem morbi magna lectus nec tempus.'
  },
  {
    question: 'What is qualification requirements for teachers?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Ut ullamcorper hendrerit porttitor aliquet fermentum praesent tincidunt vitae. Massa orci ornare cras egestas hendrerit nibh. Sapien lectus odio vestibulum laoreet. Lectus tincidunt orci ut odio. Vulputate nisi nec id at. Consectetur in sem morbi magna lectus nec tempus.'
  }
  // Add more FAQs here
]

const trainingAndDocumentationSectionData = [
  {
    heading: 'Self-Guided Training',
    description: 'Explore your interactive elearning options.',
    icon: HelpCenterPageTrainingAndDocIcon1
  },
  {
    heading: 'Train Your Team',
    description:
      'Leading onboarding for your org? We’ll help you scale your efforts.',
    icon: HelpCenterPageTrainingAndDocIcon2
  },
  {
    heading: 'Akila Trains You',
    description:
      'Explore our virtual or face-to-face instructor-led training options.',
    icon: HelpCenterPageTrainingAndDocIcon3
  },
  {
    heading: 'Developer Portal',
    description:
      'Access all the tools and documentation needed to build, manage, and connect to Akila.',
    icon: HelpCenterPageTrainingAndDocIcon3
  }
]
