import {
  BusinessAnalystBanner,
  Calendar,
  Charts,
  CloudComputing,
  ComputerWithCode,
  Database,
  NetworkOfNodes,
  Processor,
} from "~/view/assets";
import { GettingStartedSection } from "~/view/components";
import BannerImage from "~/view/components/BannerImage";

import KeyPoints from "./components/KeyPoints";
import Workflow from "./components/Workflow";

const keyPoints = [
  {
    title: "Data-Driven Decisions",
    subTitle:
      "Business analysts can make data-driven decisions quickly and easily, without the need for technical expertise. Our no-code platform enables easy exploration and analysis of data, leading to improved insights and profitability for our clients.",
    image: NetworkOfNodes,
  },
  {
    title: "Increased Efficiency",
    subTitle:
      "Akila Analytics streamlines data analysis and reporting for business analysts, leading to increased efficiency and productivity. Our platform also provides easy collaboration with other teams, such as data scientists and product managers.",
    image: ComputerWithCode,
  },
  {
    title: "Powerful Visualization",
    subTitle:
      "With Akila Analytics, business analysts can create powerful visualizations of data with ease, leading to improved communication and decision-making. Our platform provides easy-to-use visualization tools and templates, making it easy for analysts to create engaging and impactful reports.",
    image: Processor,
  },
  {
    title: "Cost-Efficient Solution",
    subTitle:
      "Akila Analytics provides a cost-efficient solution for businesses of all sizes, with no need for expensive technical expertise or software. Our no-code platform makes it easy for business analysts to derive insights from data and drive profitability, without breaking the bank.",
    image: Charts,
  },
];

const workflows = [
  {
    title: "Data Gathering and Preparation",
    subTitle:
      "The first step in the business analyst's workflow is to gather and prepare the data for analysis. With Akila Analytics, business analysts can use our no-code platform to easily consolidate and clean data from multiple sources, freeing up time for analysis and insights.",
    image: Database,
    arrow: true,
  },
  {
    title: "Data Analysis and Exploration",
    subTitle:
      "After the data is prepared, the business analyst's next step is to conduct data analysis and exploration. With Akila Analytics, business analysts can use our no-code platform to easily explore and visualize the data, identifying patterns and insights that can inform their decision-making.",
    image: Calendar,
    arrow: true,
  },
  {
    title: "Insightful Reporting and Visualization",
    subTitle:
      "Once the data is analyzed, the business analyst's next step is to create insightful reports and visualizations to communicate their findings. With Akila Analytics, business analysts can use our no-code platform to create powerful visualizations and reports, enabling easy sharing of insights with other teams.",
    image: CloudComputing,
    arrow: false,
  },
];

export default function BusinessAnalystPage() {
  return (
    <div className="relative">
      <div />
      <BannerImage
        title="Business Analyst"
        subTitle="Explore how Akila is increasing efficiency during the due diligence process"
        image={BusinessAnalystBanner}
      />
      <KeyPoints
        title="Enabling Business Analysts to Focus on Driving Value for the Business"
        subTitle="Akila’s no-code platform makes it easy for business analysts to derive insights from data and drive business growth. With Akila Analytics, you'll be able to work more efficiently and collaboratively with other teams, leading to increased profitability and success for our clients."
        keyPoints={keyPoints}
      />
      <Workflow title="Typical Workflow" workflows={workflows} />
      <GettingStartedSection />
    </div>
  );
}
