import {
  AiDataSetsCard,
  AiGuideCard,
  AutomateTasksWithEase,
  AutomaticRecurringTasksJobs,
  RecurringJobsBg,
  UnlockPowerOfMachineLearning,
} from "~/view/assets";
import {
  BannerImage,
  DescriptionImageComponent,
  GettingStartedSection,
  ReleatedResources,
  ReleatedResourcesCard,
} from "~/view/components";

export default function RecurringJobs() {
  return (
    <div>
      <div>
        <BannerImage
          title="Work Smart - Don’t Repeat Work"
          subTitle="Automate your recurring tasks and jobs easily with Akila Analytics. Free up your time and resources to focus on what matters most - your business."
          image={RecurringJobsBg}
        />
      </div>
      <DescriptionImageComponent
        heading="Automate Recurring 
        Tasks and Jobs Easily"
        description="Save time and resources with Akila Analytics' automated recurring job workflow. Our no-code platform makes it easy for anyone to automate tasks and jobs without technical expertise. Plus, our cost-efficient solution saves you money and time.  "
        img={AutomaticRecurringTasksJobs}
      />
      <DescriptionImageComponent
        changeOrder
        heading="Automate Your Tasks with Ease"
        description="Akila Analytics' automated recurring job workflow simplifies the process of automating tasks and jobs. Our no-code platform makes it easy for non-technical users to set up and manage recurring tasks. Plus, our cost-efficient solution saves you time and money."
        img={AutomateTasksWithEase}
      />
      <DescriptionImageComponent
        heading="Unlock the Power of
        Machine Learning"
        description="Akila Analytics' machine learning workflow enables you to unlock the power of machine learning and take your business to the next level. Our no-code platform makes it easy for anyone to build and train powerful models, regardless of technical expertise. Plus, our cost-efficient solution saves you time and money."
        img={UnlockPowerOfMachineLearning}
      />
      <ReleatedResources>
        <div className="grid grid-cols-1 justify-items-center gap-[15px] lg:grid-cols-3">
          {releatedResourcesSectionData?.map((data, index) => (
            <ReleatedResourcesCard
              key={`${index}-${data.description}`}
              category={data.category}
              description={data.description}
              bgImg={data.bgImg}
              link={data.link}
            />
          ))}
        </div>
      </ReleatedResources>
      <GettingStartedSection />
    </div>
  );
}

const releatedResourcesSectionData = [
  {
    category: "guide",
    description: "Data Exploration",
    bgImg: AiDataSetsCard,
    link: "/product/data-exploration",
  },
  {
    category: "guide",
    description: "Data Processing",
    bgImg: AiGuideCard,
    link: "/product/data-processing",
  },
  {
    category: "guide",
    description: "Machine Learning",
    bgImg: AiDataSetsCard,
    link: "/product/machine-learning",
  },
];
