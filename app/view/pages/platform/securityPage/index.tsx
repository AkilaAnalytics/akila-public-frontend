import {
  SecurityPageBg,
  gettingStarted,
  akilaAnalyticsLogo,
  ModernDayAnalytics,
  ImproveCollboration,
  EnhancedSecurity,
  ScalableAndFlexibleInfrastructure,
  SecurityPageBackgroundlessCardIcon1,
  SecurityPageBackgroundlessCardIcon2,
  SecurityPageBackgroundlessCardIcon3,
  SecurityPageCustomerManagement,
  SecurityInfrastructure
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

export default function SecurityPage() {
  return (
    <div>
      <div>
        <BannerImage
          title="Security is Key"
          subTitle="At Akila Analytics, we take data security seriously. That's why we deploy all our infrastructure into our customers' accounts, giving them full control over their data and analytics. "
          image={SecurityPageBg}
        />
      </div>
      <CenterAlignHeadingDescription
        heading="Enterprise-grade data protection that scales."
        description="By deploying our infrastructure into your account, we help ensure that sensitive data remains secure and in compliance with data privacy regulations, and enables customers to maintain complete visibility and ownership of their data."
      />

      <div className="container_class">
        <div className=" my-[50px]   flex flex-col items-center justify-center lg:flex-row lg:items-start  ">
          <BackgroundLessCard
            icon={SecurityPageBackgroundlessCardIcon1}
            heading="Complete Control over Your Data"
            description="Akila Analytics' deployment approach ensures that our customers maintain complete ownership and control over their data and analytics, helping ensure data security and compliance with data privacy regulations."
          />
          <BackgroundLessCard
            icon={SecurityPageBackgroundlessCardIcon2}
            heading="Advanced Security 
            Features for Sensitive Data"
            description="Akila Analytics’ platform can work with encrypted data since it’s deployed into your accounts"
          />
          <BackgroundLessCard
            icon={SecurityPageBackgroundlessCardIcon3}
            heading="Expert Support and Consulting 
            for Data Security"
            description="Akila Analytics' team of experts is available to provide support and consulting on data security, helping customers develop and implement effective security strategies that meet their unique needs and requirements."
          />
        </div>
      </div>
      <CommonListImgComponent
        img={SecurityPageCustomerManagement}
        heading="Customer managed security features"
        listData={customManagedSecuritySectionData}
        description="These include:"
        normalList
      />
      <CommonListImgComponent
        img={SecurityInfrastructure}
        heading="Security infrastructure"
        listData={securityInfrastructureSectionData}
        normalList
        description="For organization’s developing their security infrastrucure, Akila can help
        provide guidance into the following areas:"
      />
      <FeaturesSection
        heading="Security and data governance"
        featuresListData={featuresSectionData}
      />
      <AkilaBussinessCloudSection
        heading="The Akila’s Business Cloud is where work gets done faster and smarter."
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
      <GettingStartedSection />
    </div>
  )
}

const customManagedSecuritySectionData = [
  {
    description: 'SSO-based login'
  },
  {
    description: 'Fully customizable access'
  },
  {
    description: 'Control over data and access'
  }
]

const securityInfrastructureSectionData = [
  {
    description: 'Multiple logical and physical security layers'
  },
  {
    description: '“Least privilege” and “separation of duties” access model'
  },
  {
    description: 'Threat assessments of each new feature'
  },
  {
    description:
      'Extensive logging and monitoring of network, system, and application events'
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
