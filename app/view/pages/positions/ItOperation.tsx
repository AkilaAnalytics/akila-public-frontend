import { ItOperationBg } from "~/view/assets";
import { GettingStartedSection } from "~/view/components";
import BannerImage from "~/view/components/BannerImage";

import KeyPoints from "./components/KeyPoints";
import Workflow from "./components/Workflow";

const keyPoints = [
  {
    title: "Clearly Communicate Analyses With Stakeholders",
    subTitle:
      "Elit corporis error dolor quis molestiae Odit officia numquam voluptatum dicta vero suscipit, illum vel Dicta dolor voluptates dolor odit hic mollitia explicabo consequuntur Ipsa beatae enim sunt sit a? Velit animi natus ipsam dolorem fugit, velit provident? Vel ratione",
    image: "/assets/icons/network-of-nodes.svg",
  },
  {
    title: "Easily Summarize and Extract Highlights From Datasets",
    subTitle:
      "Lorem quia voluptates assumenda dicta ullam doloremque magnam mollitia dicta est? Atque consequuntur delectus eum quidem saepe ad Aut obcaecati cumque enim nemo quod Voluptatem deleniti reiciendis harum velit qui? Ut enim sequi vel soluta harum Consequatur voluptates nisi obcaecati nulla in Officia repudiandae quos debitis mollitia expedita Minus eos.",
    image: "/assets/icons/computer-with-code.svg",
  },
  {
    title: "Automate and Schedule Workflows",
    subTitle:
      "Consectetur velit velit dolorem fugit magni Rerum laborum dolorem ex tempora doloribus? Officiis ipsum quaerat sed tenetur fugit Odio debitis necessitatibus accusantium rem explicabo necessitatibus qui. Ipsa ea repudiandae repellendus consectetur a Magni laborum laborum maiores maiores molestiae. Fuga id autem ratione repellat quos. Molestias ducimus quae exercitationem numquam labore",
    image: "/assets/icons/processor.svg",
  },
  {
    title: "Coordinate Between Technical and Non-Technical Teams",
    subTitle:
      "Lorem eos debitis laudantium iure debitis, fugit quia provident quaerat atque animi Assumenda placeat blanditiis porro libero quia vero necessitatibus vitae? Nisi vitae",
    image: "/assets/icons/charts.svg",
  },
];

const workflows = [
  {
    title: "Customer and Market ResearchCustomer and Market Research",
    subTitle:
      "The first step in the product manager's workflow is to conduct customer and market research to identify customer needs and pain points. With Akila Analytics, product managers can use our no-code platform to easily analyze customer data and gain insights into their behavior and preferences.",
    image: "/assets/icons/database.svg",
    arrow: true,
  },
  {
    title: "Improve Product Performance",
    subTitle:
      "After the research is conducted, the product manager's next step is to develop and test new products. With Akila Analytics, product managers can use our no-code platform to streamline product development, identifying customer needs and pain points to inform product design.",
    image: "/assets/icons/calender.svg",
    arrow: true,
  },
  {
    title: "Product Launch and Optimization",
    subTitle:
      "Once the product is developed and tested, the product manager's next step is to launch the product and optimize its performance. With Akila Analytics, product managers can use our no-code platform to analyze customer feedback and make data-driven decisions to optimize product performance and drive profitability.",
    image: "/assets/icons/cloud-computing.svg",
    arrow: false,
  },
];

export default function ItOperation() {
  return (
    <div className="relative">
      <div />
      <BannerImage
        title="IT Operations"
        subTitle="Lorem beatae necessitatibus quia animi velit. Laborum eum magni eaque delectus assumenda Repellat cumque sint aliquid cum facilis Assumenda assumenda"
        image={ItOperationBg}
      />
      <KeyPoints
        title="Enabling Business Analysts to Focus on Driving Value for
        the Business"
        subTitle="Consectetur et dolore accusantium ullam aliquid Quo error dolores quae alias repellat, ipsum. Dolorum nesciunt tempora corporis praesentium rerum ea Distinctio perspiciatis vel laborum molestiae placeat? Illum libero tempore maxime cupiditate illo Enim sunt assumenda velit dolorum nemo? Harum fugit."
        keyPoints={keyPoints}
      />
      <Workflow title="Typical Workflow" workflows={workflows} />
      <div className="bg-black pb-16">
        <GettingStartedSection />
      </div>
    </div>
  );
}
