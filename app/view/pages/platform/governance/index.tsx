import {
  ModernDayAnalytics,
  ImproveCollboration,
  EnhancedSecurity,
  ScalableAndFlexibleInfrastructure,
  GovernanceBg,
  GovernanceFirstListImg,
  GovernanceFirstListIcon1,
  GovernanceFirstListIcon2,
  GovernanceFirstListIcon4,
  GovernanceFirstListIcon5,
  GovernanceBackgroundlessCardIcon1,
  GovernanceBackgroundlessCardIcon2,
  GovernanceBackgroundlessCardIcon3,
  CommonListImgComponentIcon1,
  CommonListImgComponentIcon2,
  CommonListImgComponentIcon3,
  GovernancePageTrackAudit,
  GovernanceFirstListIcon3
} from '~/view/assets'
import {
  BannerImage,
  GettingStartedSection,
  CommonListImgComponent,
  FeaturesSection,
  CommonGrayCard,
  BackgroundLessCard,
  AkilaBussinessCloudSection,
  CenterAlignHeadingDescription
} from '~/view/components'

export default function Governance() {
  return (
    <div>
      <div>
        <BannerImage
          title="Manage data governance at scale"
          subTitle="Data governance and security have never been more important. Akila is here to make that process easier."
          image={GovernanceBg}
        />
      </div>

      <CenterAlignHeadingDescription
        heading="Bring Akila’s power and flexibility to data governance."
        description="Akila provides documentation for all jobs and projects. "
      />
      <CommonListImgComponent
        img={GovernanceFirstListImg}
        listData={GovernanceFirstListImgData}
      />
      <div className="container_class">
        <div className=" mb-[100px] mt-[60px]  flex flex-col lg:flex-row  ">
          <BackgroundLessCard
            icon={GovernanceBackgroundlessCardIcon1}
            heading="Standardization"
            description=" Enforce consistency and standardization across workflows and processes. This reduces discrepancies and enhances accountability."
          />
          <BackgroundLessCard
            icon={GovernanceBackgroundlessCardIcon2}
            heading="Compliance"
            description="Design workflows to meet industry-specific regulatory and compliance standards, relieving teams of the burden to manually ensure adherence."
          />
          <BackgroundLessCard
            icon={GovernanceBackgroundlessCardIcon3}
            heading="Lower Risk"
            description=" By reducing manual coding, no-code platforms lower the risk of human error, which can lead to data breaches or non-compliance with regulations."
          />
        </div>
      </div>
      <CommonListImgComponent
        changeOrder
        img={GovernancePageTrackAudit}
        heading="Track and audit data across storage environments."
        listData={trackAndAuditSectionDataList}
      />
      <FeaturesSection
        heading="Security and data governance"
        featuresListData={featuresSectionData}
      />
      {/*  */}
      <div className="hidden">
        <AkilaBussinessCloudSection
          heading="The Akila’s Business Cloud is where work gets done faster and smarter."
          description="Akila Analytics can help you harness the power of your data with apps to drive business action.">
          <div className="grid justify-items-center gap-[30px] md:grid-flow-col">
            {akilaBussinessCloudSectionData.map((data, index) => (
              <CommonGrayCard
                heading={data.heading}
                description={data.description}
                logo={data.logo}
                key={data.heading + index}
              />
            ))}
          </div>
        </AkilaBussinessCloudSection>
      </div>
      <GettingStartedSection />
    </div>
  )
}

const trackAndAuditSectionDataList = [
  {
    icon: CommonListImgComponentIcon1,
    description:
      'Provide self-service analytics to business users so they can answer their own questions, freeing up IT resources.'
  },
  {
    icon: CommonListImgComponentIcon2,
    description:
      'Create customized dashboards that guide people through analysis and improve comprehension with augmented analytics.'
  },
  {
    icon: CommonListImgComponentIcon3,
    description:
      'Define your own criteria to be notified right on your phone when important data points change.'
  }
]
const GovernanceFirstListImgData = [
  {
    icon: GovernanceFirstListIcon1,
    description: 'Automate jobs with a fully customizable workflow.'
  },
  {
    icon: GovernanceFirstListIcon2,
    description:
      'Configure jobs to scale across the entire instance, ramping up or down as needed.'
  },
  {
    icon: GovernanceFirstListIcon3,
    description:
      'Easily build and schedule reliable jobs that will run without incident.'
  },
  {
    icon: GovernanceFirstListIcon4,
    description:
      'Integrate directly, eliminating the need to deploy, maintain, and support your own infrastructure.'
  },
  {
    icon: GovernanceFirstListIcon5,
    description:
      'Logs all runtime activity in an auditable format with minimal effort to power new data stories.'
  }
]

//

const featuresSectionData = [
  {
    heading: 'Controlling access to data ›',
    descriptionList: [
      'Personalized data permission',
      'Trusted attributes',
      'Custom user roles',
      'Usr management via API',
      'Bulk content administration',
      'DemoStats',
      'Certified Content',
      'Group access and administration'
    ]
  },
  {
    heading: 'Safeguarding your data ›',
    descriptionList: [
      'Secure architecture',
      'Bring Your Own Key (BYOK) Encryption',
      'Security standards compliance',
      'Single sign-on',
      'Multi-factor authentication',
      'Logging and audits'
    ]
  }
]

const akilaBussinessCloudSectionData = [
  {
    heading: 'Reporting & Dashboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan at fringilla imperdiet vehicula tincidunt mauris, malesuada.',
    logo: ModernDayAnalytics
  },
  {
    heading: 'Self-service Analytics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan at fringilla imperdiet vehicula tincidunt mauris, malesuada.',
    logo: ImproveCollboration
  },
  {
    heading: 'Data Sharing & Embedded Analytics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan at fringilla imperdiet vehicula tincidunt mauris, malesuada.',
    logo: EnhancedSecurity
  },
  {
    heading: 'Data Apps',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan at fringilla imperdiet vehicula tincidunt mauris, malesuada.',
    logo: ScalableAndFlexibleInfrastructure
  }
]
