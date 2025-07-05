import BannerImage from '~/view/components/BannerImage'
import GettingStarted from '~/view/features/GettingStarted'

import KeyPoints from './components/KeyPoints'
import Workflow from './components/Workflow'

const keyPoints = [
  {
    title: 'Clearly Communicate Analyses With Stakeholders',
    subTitle:
      ' Elit corporis error dolor quis molestiae Odit officia numquam voluptatum dicta vero suscipit, illum vel Dicta dolor voluptates dolor odit hic mollitia explicaboconsequuntur Ipsa beatae enim sunt sit a? Velit animi natus ipsam dolorem fugit, velitprovident? Vel ratione',
    image: '/assets/icons/network-of-nodes.svg'
  },
  {
    title: 'Clearly Communicate Analyses With Stakeholders',
    subTitle:
      ' Elit corporis error dolor quis molestiae Odit officia numquam voluptatum dicta vero suscipit, illum vel Dicta dolor voluptates dolor odit hic mollitia explicaboconsequuntur Ipsa beatae enim sunt sit a? Velit animi natus ipsam dolorem fugit, velitprovident? Vel ratione',
    image: '/assets/icons/computer-with-code.svg'
  },
  {
    title: 'Clearly Communicate Analyses With Stakeholders',
    subTitle:
      ' Elit corporis error dolor quis molestiae Odit officia numquam voluptatum dicta vero suscipit, illum vel Dicta dolor voluptates dolor odit hic mollitia explicaboconsequuntur Ipsa beatae enim sunt sit a? Velit animi natus ipsam dolorem fugit, velitprovident? Vel ratione',
    image: '/assets/icons/processor.svg'
  },
  {
    title: 'Clearly Communicate Analyses With Stakeholders',
    subTitle:
      ' Elit corporis error dolor quis molestiae Odit officia numquam voluptatum dicta vero suscipit, illum vel Dicta dolor voluptates dolor odit hic mollitia explicaboconsequuntur Ipsa beatae enim sunt sit a? Velit animi natus ipsam dolorem fugit, velitprovident? Vel ratione',
    image: '/assets/icons/charts.svg'
  }
]

const workflows = [
  {
    title: 'Combine Datasets to Identify Key Metrics',
    subTitle:
      'Consectetur ratione beatae libero veniam quae, nisi. Aliquid facere sapiente deleniti velit placeat, magnam delectus? Reprehenderit cumque provident laborum accusamus accusantium? Minima quisquam soluta magnam autem temporibus Qui est odio quibusdam voluptates est reiciendis. Modi nostrum distinctio alias cum cum Earum',
    image: '/assets/icons/database.svg',
    arrow: true
  },
  {
    title: 'Combine Datasets to Identify Key Metrics',
    subTitle:
      'Consectetur ratione beatae libero veniam quae, nisi. Aliquid facere sapiente deleniti velit placeat, magnam delectus? Reprehenderit cumque provident laborum accusamus accusantium? Minima quisquam soluta magnam autem temporibus Qui est odio quibusdam voluptates est reiciendis. Modi nostrum distinctio alias cum cum Earum',
    image: '/assets/icons/calender.svg',
    arrow: true
  },
  {
    title: 'Combine Datasets to Identify Key Metrics',
    subTitle:
      'Consectetur ratione beatae libero veniam quae, nisi. Aliquid facere sapiente deleniti velit placeat, magnam delectus? Reprehenderit cumque provident laborum accusamus accusantium? Minima quisquam soluta magnam autem temporibus Qui est odio quibusdam voluptates est reiciendis. Modi nostrum distinctio alias cum cum Earum',
    image: '/assets/icons/cloud-computing.svg',
    arrow: false
  }
]

export default function DevOpsPage() {
  return (
    <div className="relative">
      <div />
      <BannerImage
        title="Dev Ops"
        subTitle="Explore how Akila is increasing efficiency during the due diligence process"
        image="/assets/company-pages/devops.png"
      />
      <KeyPoints
        title="Enabling Dev Opss to Focus on Driving Value for the Business"
        subTitle="Elit corporis error dolor quis molestiae Odit officia numquam voluptatum dicta vero
suscipit, illum vel Dicta dolor voluptates dolor odit hic mollitia explicabo
consequuntur Ipsa beatae enim sunt sit a? Velit animi natus ipsam dolorem fugit, velit
provident? Vel ratione"
        keyPoints={keyPoints}
      />
      <Workflow title="Typical Workflow for a Dev Ops" workflows={workflows} />
      <GettingStarted />
    </div>
  )
}
