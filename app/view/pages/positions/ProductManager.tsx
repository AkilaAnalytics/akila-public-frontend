import {
  Calendar,
  Charts,
  CloudComputing,
  ComputerWithCode,
  Database,
  NetworkOfNodes,
  Processor,
  SoftwareEngineer
} from '~/view/assets'
import BannerImage from '~/view/components/BannerImage'
import GettingStarted from '~/view/features/GettingStarted'

import KeyPoints from './components/KeyPoints'
import Workflow from './components/Workflow'

const keyPoints = [
  {
    title: 'Customer Insights',
    subTitle:
      'With Akila Analytics, product managers can gain deep insights into customer behavior and preferences, leading to more successful product launches and increased profitability. Our no-code platform makes it easy for product managers to analyze customer data and derive actionable insights.',
    image: NetworkOfNodes
  },
  {
    title: 'Data-Driven Decisions',
    subTitle:
      "Akila Analytics can help product managers make data-driven decisions at every stage of the product lifecycle. By leveraging  analytics tools, managers can quickly identify trends and patterns in customer data, and develop strategies that align with your business goals. Akila's automated data processing capabilities allow you to easily consolidate and analyze data from various sources, enabling you to make informed decisions based on accurate and up-to-date information.",
    image: ComputerWithCode
  },
  {
    title: 'Streamlined Development',
    subTitle:
      'With Akila Analytics, product managers can streamline product development by identifying and addressing customer needs and pain points. Our platform enables easy collaboration with other teams, such as data scientists and business analysts, leading to more efficient and successful product launches.',
    image: Processor
  },
  {
    title: 'Increased Profitability',
    subTitle:
      'Akila Analytics provides a cost-efficient solution for product managers to increase profitability by leveraging data science and analytics. Our no-code platform makes it easy for product managers to analyze customer data, make data-driven decisions, and build successful products.',
    image: Charts
  }
]

const workflows = [
  {
    title: 'Market Analysis: How to Make Informed Decisions',
    subTitle:
      "Ensure your products meet the needs of the market. Akila Analytics helps you make informed decisions by providing customer insights and data-driven decision making. With Akila's advanced analytics tools, you can quickly identify market trends, assess the competition, and optimize your product offerings to maximize revenue. ",
    image: Database,
    arrow: true
  },
  {
    title: 'Product Performance: Monitor and Optimize Product Performance',
    subTitle:
      'Product performance is essential for achieving business objectives and staying competitive. Monitoring and optimizing product performance has never been easier Akila Analytics helps you achieve this by providing customer insights, data-driven decision making, and automated reporting.',
    image: Calendar,
    arrow: true
  },
  {
    title: 'User Feedback: Improve User Satisfaction',
    subTitle:
      "Akila Analytics can help you achieve this by providing customer insights, data-driven decision making, and automated reporting. With Akila's advanced analytics tools, you can quickly identify areas for improvement, optimize your product offerings, and track progress over time. Join us to learn how Akila Analytics can help you monitor and optimize product performance for success.",
    image: CloudComputing,
    arrow: false
  }
]

export default function ProductManagerPage() {
  return (
    <div className="relative pb-[50px] sm:pb-[100px]">
      <div />
      <BannerImage
        title="Product Manager"
        subTitle="Build successful products with no-code analytics. Make data-driven decisions and increase profitability."
        image={SoftwareEngineer}
      />
      <KeyPoints
        title="Product Managers are Understanding their End Markets and  Delivering Products Faster and More profitability"
        subTitle="With Akila Analytics, you'll be able to quickly and efficiently analyze customer data and gain insights into their behavior and preferences. Our platform empowers product managers to make data-driven decisions and build successful products, leading to increased profitability and success for our clients."
        keyPoints={keyPoints}
      />
      <Workflow title="Typical Workflow" workflows={workflows} />
      <GettingStarted />
    </div>
  )
}
