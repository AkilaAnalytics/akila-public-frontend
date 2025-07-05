import {
  AiDataSetsCard,
  AiGuideCard,
  BeSpokeVisualizate,
  ConnectTableauIcon,
  FeaturesOfData,
  PowerBi,
  VisualizaDataBg,
} from "~/view/assets";
import {
  BannerImage,
  CenterAlignHeadingDescription,
  GettingStartedSection,
  ReleatedResources,
  ReleatedResourcesCard,
} from "~/view/components";

import { FeatureDataSection, VisualizeDataCard } from "./component";
export default function VisualizaData() {
  return (
    <div>
      <div>
        <BannerImage
          title="Visualize Data"
          subTitle="We understand you have preferred data visualization tools, and we don’t want to change that. Akila outputs data to your preferred visualization tools. "
          image={VisualizaDataBg}
        />
      </div>

      <CenterAlignHeadingDescription
        heading="Ultimate freedom to Visualize Data"
        description="Utilize pre-built visualizations on the Akila platform and export to third-party platforms like Tableau and PowerBI to ensure your workflows are seamless."
      />
      <div className="my-[50px] ">
        <div className="container_class ">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row ">
            <VisualizeDataCard
              icon={ConnectTableauIcon}
              heading="Connect to Tableau"
              description="We easily output data to Tableau."
            />
            <VisualizeDataCard
              icon={PowerBi}
              heading="Power BI"
              description="We easily output data to Power BI."
            />
            <VisualizeDataCard
              icon={BeSpokeVisualizate}
              heading="Bespoke Visualization"
              description="We can help output data to bespoke tools."
            />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <FeatureDataSection
          changeOrder
          heading="Features of Data"
          description="Akila Analytics makes it easy for users to clean, process, and transform data, ensuring that it is ready for easy visualization.  Data processing and transformation capabilities are user friendly. Users can merge datasets, group on key variables, and handle missing data with ease. With Akila Analytics, users can spend less time cleaning and transforming data and more time deriving insights from it."
          img={FeaturesOfData}
        />
      </div>

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
