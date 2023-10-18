import {
  Calendar,
  Charts,
  CloudComputing,
  ComputerWithCode,
  Database,
  DataScientistBanner,
  NetworkOfNodes,
  Processor
} from '~/view/assets'
import { GettingStartedSection } from '~/view/components'
import BannerImage from '~/view/components/BannerImage'

import KeyPoints from './components/KeyPoints'
import Workflow from './components/Workflow'

const keyPoints = [
  {
    title: 'Efficient Data Processing',
    subTitle:
      'With Akila Analytics, data scientists can process large volumes of data quickly and efficiently, without the need for coding. Our no-code platform streamlines data consolidation, cleansing, and processing, freeing up time for data scientists to focus on analysis and insights.',
    image: NetworkOfNodes
  },
  {
    title: 'Advanced Machine Learning',
    subTitle:
      'Akila Analytics provides data scientists with access to advanced machine learning models and algorithms, without requiring extensive technical expertise. Our platform makes it easy for data scientists to develop and deploy powerful models, leading to more accurate and effective data analysis.',
    image: ComputerWithCode
  },
  {
    title: 'Collaboration and Teamwork',
    subTitle:
      'With Akila Analytics, data scientists can collaborate and work more efficiently with other teams, such as business analysts and product managers. Our platform enables easy sharing of data and insights, leading to better decision-making and increased profitability for our clients.',
    image: Processor
  },
  {
    title: 'Automation and Workflow',
    subTitle:
      'Akila Analytics streamlines recurring tasks and analysis for data scientists, freeing up time and resources for more complex projects. Our platform also provides automated workflows for data processing and analysis, leading to greater efficiency and improved profitability.',
    image: Charts
  }
]

const workflows = [
  {
    title: 'Data Preparation and Cleaning',
    subTitle:
      "The first step in the data scientist's workflow is to prepare and clean the data, ensuring that it is consistent and accurate. With Akila Analytics, data scientists can use our no-code platform to quickly and easily consolidate and clean data from multiple sources, without the need for coding.",
    image: Database,
    arrow: true
  },
  {
    title: 'Exploratory Data Analysis',
    subTitle:
      " After the data is prepared and cleaned, the data scientist's next step is to conduct exploratory data analysis. With Akila Analytics, data scientists can use our no-code platform to quickly and easily explore and visualize the data, identifying patterns and anomalies that can inform their analysis.",
    image: Calendar,
    arrow: true
  },
  {
    title: 'Model Development and Deployment',
    subTitle:
      "Once the data is analyzed, the data scientist's next step is to develop and deploy machine learning models to make predictions and drive insights. With Akila Analytics, data scientists can use our no-code platform to quickly and easily develop and deploy powerful machine learning models, without the need for technical expertise.",
    image: CloudComputing,
    arrow: false
  }
]

export default function DataScientistPage() {
  return (
    <div className="relative">
      <div />
      <BannerImage
        title="Data Scientist"
        subTitle="Unlock data insights with our no-code platform. Improve efficiency and profitability for clients."
        image={DataScientistBanner}
      />
      <KeyPoints
        title="Data Scientists are Unlocking the Power of No-Code Analytics"
        subTitle="With Akila Analytics, you'll be able to quickly and efficiently analyze large volumes of data, without the need for coding. Our platform empowers data scientists to spend less time on data processing and more time on analysis, leading to greater insights and improved profitability for our clients."
        keyPoints={keyPoints}
      />
      <Workflow title="Typical Workflow" workflows={workflows} />
      <GettingStartedSection />
    </div>
  )
}
