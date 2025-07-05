import {
  DataScienceBg,
  DataScienceCreateAndDeploy,
  DataSciencePageBackgroundlessCardIcon1,
  DataSciencePageBackgroundlessCardIcon2,
  DataSciencePageBackgroundlessCardIcon3,
  DataSciencePageFeatureIcon1,
  DataSciencePageFeatureIcon2,
  DataSciencePageFeatureIcon3,
  DataSciencePageFeatureIcon4,
  DataSciencePageFeatureIcon5,
  DataSciencePageFeatureIcon6,
  EnhancedSecurity,
  ImproveCollboration,
  ModernDayAnalytics,
} from "~/view/assets";
import {
  AkilaBussinessCloudSection,
  BackgroundLessCard,
  BannerImage,
  CommonGrayCard,
  DescriptionImageComponent,
  GettingStartedSection,
} from "~/view/components";

import { DataSciencePageFeatures } from "./component";

export default function DataScience() {
  return (
    <div>
      <div>
        <BannerImage
          title="End-to-end tools to productionize data science."
          subTitle="Akila’s full-stack, modern BI platform allows you to connect all your data and systems, build and productionize your data science models, and visualize results—so you can optimize your data science practice for more confident and timely business decisions."
          image={DataScienceBg}
        />
      </div>
      <div className="container_class">
        <div className=" mb-[100px] mt-[60px]  flex flex-col lg:flex-row  ">
          <BackgroundLessCard
            icon={DataSciencePageBackgroundlessCardIcon1}
            heading="Automate workflows"
            description="Automate repetitive data processing tasks, freeing up resources for strategic initiatives."
          />
          <BackgroundLessCard
            icon={DataSciencePageBackgroundlessCardIcon2}
            heading="Easy Machine Learning"
            description="Implement AI and ML solutions to uncover hidden patterns, delivering a competitive edge."
          />
          <BackgroundLessCard
            icon={DataSciencePageBackgroundlessCardIcon3}
            heading="Enable rapid decision-making"
            description="Provide your teams, customers, and partners with insights to help drive accurate, data-driven business impact."
          />
        </div>
      </div>
      <DescriptionImageComponent
        heading="Create & deploy models"
        description="No matter your use case, Akila’s platform ensures you’re driving value in the most seamless way possible. Data and analytics should power your workflows, not be roadblocks. With our services, you can:"
        img={DataScienceCreateAndDeploy}
      />
      <DataSciencePageFeatures dataList={datascienceFeaturesData} />
      <AkilaBussinessCloudSection
        heading="Akila’s is where work gets done faster and smarter"
        description="Akila Analytics can help you harness the power of your data with apps to drive business action."
      >
        <div className="grid justify-items-center gap-[30px] md:grid-flow-col">
          {akilaBussinessCloudSectionData.map((data, index) => (
            <CommonGrayCard
              key={index}
              heading={data.heading}
              description={data.description}
              logo={data.logo}
            />
          ))}
        </div>
      </AkilaBussinessCloudSection>
      <GettingStartedSection />
    </div>
  );
}

const akilaBussinessCloudSectionData = [
  {
    heading: "Data Analysts",
    description:
      "Gain deeper insights and drive business growth with advanced analytics tools, such as machine learning and predictive modeling.",
    logo: ModernDayAnalytics,
  },
  {
    heading: "Product Managers",
    description:
      "Develop winning products and optimize your product offerings with customer insights and data-driven decision-making.",
    logo: ImproveCollboration,
    link: "/positions/product-manager",
  },
  {
    heading: "Marketing",
    description:
      "Optimize marketing campaigns and improve customer engagement with targeted campaigns and personalized recommendations.",
    logo: EnhancedSecurity,
    link: "/positions/marketting-analysis",
  },
];
const datascienceFeaturesData = [
  {
    icon: DataSciencePageFeatureIcon1,
    description:
      "Empower your data science teams with advanced analytics tools",
  },
  {
    icon: DataSciencePageFeatureIcon2,
    description:
      "Scale and deploy data science solutions that meet your organization's unique needs and preferences",
  },
  {
    icon: DataSciencePageFeatureIcon3,
    description:
      "Collaborate and version control across data science teams, enhancing productivity and quality",
  },
  {
    icon: DataSciencePageFeatureIcon4,
    description:
      "Gain deeper insights into your data and drive business growth with predictive modeling and machine learning",
  },
  {
    icon: DataSciencePageFeatureIcon5,
    description:
      "Empower your data science teams with advanced analytics tools",
  },
  {
    icon: DataSciencePageFeatureIcon6,
    description:
      "Monitor KPIs, enabling quick, informed actions to optimize business performance.",
  },
];
