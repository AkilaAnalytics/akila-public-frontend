import {
  EndToEndSolutionsBg,
  EndToEndDataExploration,
  EndToEndDataProcessing,
  ModernDayAnalytics,
  ImproveCollboration,
  EnhancedSecurity,
  ScalableAndFlexibleInfrastructure,
  CommonListImgComponentIcon1,
  CommonListImgComponentIcon2,
  CommonListImgComponentIcon3,
  EndToEndMachineLearning,
  EndToEndRecurringJobs,
  EndToEndReportingAndDashboard
} from '~/view/assets'
import {
  BannerImage,
  GettingStartedSection,
  CommonListImgComponent,
  FeaturesSection,
  CommonGrayCard,
  AkilaBussinessCloudSection
} from '~/view/components'

export default function EndToEndSolutions() {
  return (
    <div>
      <div>
        <BannerImage
          title="Products to take you from insight to action."
          subTitle="Uncover the simplicity of data science with our end-to-end, no-code solutions. Our intuitive platform puts the power of data exploration, processing, and machine learning right at your fingertips."
          image={EndToEndSolutionsBg}
        />
      </div>
      <CommonListImgComponent
        changeOrder
        img={EndToEndDataExploration}
        heading="Data Exploration"
        listData={buildInDataScienceList}
      />
      <FeaturesSection
        heading="Data Apps"
        featuresListData={featuresSectionData_1}
      />
      <CommonListImgComponent
        img={EndToEndDataProcessing}
        heading="Data Processing"
        listData={dataProcessingSectionData}
      />
      <FeaturesSection
        heading="Integration Cloud Features"
        featuresListData={featuresSectionData_2}
      />
      <CommonListImgComponent
        changeOrder
        img={EndToEndMachineLearning}
        heading="Machine Learning"
        listData={machineLearningSectionData}
      />
      <FeaturesSection
        heading="Features"
        featuresListData={featuresSectionData_3}
      />
      <CommonListImgComponent
        changeOrder
        img={EndToEndRecurringJobs}
        heading="Recurring Jobs"
        listData={recurringJobsSectiondata}
      />
      <AkilaBussinessCloudSection
        heading="Akila is where work gets done faster and smarter."
        description="Akila Analytics can help you harness the power of your data with apps to drive business action.">
        <div className="grid justify-center gap-[30px] md:grid-flow-col">
          {akilaBussinessCloudSectionData.map((data, index) => (
            <CommonGrayCard
              key={data.heading + index}
              heading={data.heading}
              description={data.description}
              logo={data.logo}
            />
          ))}
        </div>
      </AkilaBussinessCloudSection>
      <CommonListImgComponent
        img={EndToEndReportingAndDashboard}
        heading="Reporting and dashboards "
        listData={reportingDataSectionData}
      />

      <GettingStartedSection />
    </div>
  )
}

const buildInDataScienceList = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      'Quickly explore your data with intuitive visualizations and interactive tools'
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'Identify patterns and trends in your data with descriptive statistics and data profiling'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Use data exploration to gain insights that can inform your data processing and modeling workflows'
  }
]
const recurringJobsSectiondata = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      'Schedule recurring data processing and modeling jobs to save time and ensure consistency'
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'Set up automated email alerts to stay informed about changes in your data'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Use recurring jobs to automate repetitive tasks and free up time for more high-level analysis'
  }
]
const dataProcessingSectionData = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      "Clean and preprocess your data with ease using Akila's no-code platform"
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'Merge datasets and handle missing data to ensure that your analysis is accurate and complete'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Streamline your data processing workflows with automation and batch processing to save time and resources'
  }
]
const reportingDataSectionData = [
  {
    icon: CommonListImgComponentIcon1,
    description: 'Create data outputs that are utilized in your dashboards '
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'Use interactive visualizations to explore your data and share insights with others'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Output data to be used in advanced visualization techniques, such as heat maps and network diagrams, to gain deeper insights from your data.'
  }
]
const machineLearningSectionData = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      'Train machine learning models to predict outcomes and gain deeper insights from your data'
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'Use automated machine learning tools to quickly generate models with minimal input'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Utilize reinforcement learning and other advanced techniques to optimize business outcomes'
  }
]

const featuresSectionData_1 = [
  {
    descriptionList: [
      'Appstore',
      'Connectors',
      'QuickStart Apps',
      'Business Solution Apps',
      'SDKs',
      'Connector Dev Studio'
    ]
  },
  {
    descriptionList: [
      'App Dev Studio',
      'App Distribution',
      'AppDB',
      'Phoenix',
      'Data Writeback',
      'Data collection apps'
    ]
  },
  {
    descriptionList: [
      'AI/ML',
      'Bespoke workflows',
      'Integration with existing services',
      'Development consultation'
    ]
  }
]
const featuresSectionData_2 = [
  {
    descriptionList: [
      '1000+ pre build data connectors ',
      'On-premises connectors',
      'Connectors to proprietary systems'
    ]
  },
  {
    descriptionList: [
      'Data federation',
      'Native integration with cloud data warehouses',
      'Partitioned connectors'
    ]
  },
  {
    descriptionList: [
      'File upload',
      'Email attachment import',
      'CSV SFTP connectors'
    ]
  }
]
const featuresSectionData_3 = [
  {
    descriptionList: [
      'Connect to your data',
      'All infrastructure deployed safely in your environments'
    ]
  },
  {
    descriptionList: ['SSO', 'Native integration with cloud data warehouses']
  },
  {
    descriptionList: ['Upload individual files', 'Automated emails']
  },
  {
    // heading: 'Orchestrate data pipelines ›',
    descriptionList: ['Integration Studio', 'Data Writeback', 'Data Lineage']
  }
]

const akilaBussinessCloudSectionData = [
  {
    heading: 'Reporting & Dashboard',
    description: 'Output data to reports and dashboards.',
    logo: ModernDayAnalytics
  },
  {
    heading: 'Self-service Analytics',
    description:
      'Replace outsourced analytical workflows to in-house analytics.',
    logo: ImproveCollboration
  },
  {
    heading: 'Data Sharing & Embedded Analytics',
    description: 'Easily share analytical processes across teams.',
    logo: EnhancedSecurity
  },
  {
    heading: 'Data Apps',
    description: 'Build data-centric apps.',
    logo: ScalableAndFlexibleInfrastructure
  }
]
