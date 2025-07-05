import {
  AiDataSetsCard,
  AiGuideCard,
  BuildInDataSciencePrep,
  CombineAndTransformData,
  CommonListImgComponentIcon1,
  CommonListImgComponentIcon2,
  CommonListImgComponentIcon3,
  IntegarteDataBg,
} from "~/view/assets";
import {
  BannerImage,
  CommonListImgComponent,
  DescriptionImageComponent,
  FeaturesSection,
  GettingStartedSection,
  ReleatedResources,
  ReleatedResourcesCard,
} from "~/view/components";

export default function IntegrateData() {
  return (
    <div>
      <div>
        <BannerImage
          title="Data Integration Made Easy"
          subTitle="We understand you have preferred data visualization tools, and we don’t want to change that. Akila outputs data to your preferred visualization tools. "
          image={IntegarteDataBg}
        />
      </div>
      <DescriptionImageComponent
        img={CombineAndTransformData}
        changeOrder
        heading="Combine and transform your data."
        description="Akila Analytics empowers users to process their data quickly and efficiently. Our platform includes a suite of data processing tools that enable users to merge datasets, filter data, aggregate values, and more. Our no-code approach to data processing ensures that all users can process their data with ease. With Akila Analytics, users save time and resources by streamlining their data processing workflows and getting insights faster.
        "
      />
      <CommonListImgComponent
        img={BuildInDataSciencePrep}
        heading="Build in data science prep."
        listData={buildInDataScienceList}
      />
      <FeaturesSection
        heading="Data Integration Features"
        featuresListData={featuresSectionData}
      />
      <ReleatedResources>
        <div className="grid grid-cols-1 justify-items-center gap-[15px] lg:grid-cols-3">
          <ReleatedResourcesCard
            category="data sheet"
            description="AI-Assisted Data Preparation for Machine Learning"
            bgImg={AiDataSetsCard}
          />
          <ReleatedResourcesCard
            category="guide"
            description="End-to-End AI: The Complete Guide to Akila Analytics’s AI Cloud Platform"
            bgImg={AiGuideCard}
          />
          <ReleatedResourcesCard
            category="data sheet"
            description="AI Cloud Platform"
            bgImg={AiDataSetsCard}
          />
        </div>
      </ReleatedResources>

      <GettingStartedSection />
    </div>
  );
}

const buildInDataScienceList = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      "Process  data without writing complex code or working with third-party tools",
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      "Simplify the data processing process by allowing users to focus on insights and analysis rather than technical details",
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      "leverage the power of data processing without the need for a dedicated data engineering team",
  },
];
const featuresSectionData = [
  {
    heading: "Connect your data ›",
    descriptionList: [
      "1000+ pre-built cloud connectors",
      "On-premises connectors",
      "Connections to proprietary systems",
      "Data federation",
      "Partitioned connectors",
      "File upload",
      "Email attachment import",
      "CSV SFTP connectors",
    ],
  },
  {
    heading: "Transform data ›",
    descriptionList: ["Magic ETL", "SQL DataFlows", "Data Science data prep"],
  },
  {
    heading: "Query your data ›",
    descriptionList: [
      "Adrenaline",
      "Massively Parallel Processing",
      "Dynamic scaling",
      "Federated queries",
    ],
  },
  {
    heading: "Data pipelines ›",
    descriptionList: ["Integration Studio", "Data Writeback", "Data Lineage"],
  },
];
