import {
  email,
  world,
  mapPin,
  phone,
  chartWithLine,
  chartWithPlus,
  chartWithDollar,
  hardDrive,
} from "~/view/assets";
import { GridBackground, ContactForm } from "~/view/components";

const details = [
  {
    image: email,
    text: "support@AkilaAnalytics.com",
  },
  {
    image: phone,
    text: "(800) 609-0675",
  },
  {
    image: world,
    text: "AkilaAnalytics.com",
  },
  {
    image: mapPin,
    text: "66 W Flagler St 66 W Flagler St Miami, FL 33130",
  },
];

const cards = [
  {
    title: "Automate Your Existing Workflows",
    image: chartWithLine,
    description:
      "Streamline complex data processes with our intuitive automation tools. Reduce manual effort and minimize errors to enhance efficiency and productivity in your data analysis.",
  },
  {
    title: "Grow Your Business by Leveraging Cutting-Edge Analytics",
    image: chartWithPlus,
    description:
      "Utilize advanced analytics to uncover hidden insights and drive strategic decision-making. Our platform's predictive capabilities can help you stay ahead of market trends and capitalize on growth opportunities.",
  },
  {
    title: "Get Maximum Value From Existing Investments",
    image: chartWithDollar,
    description:
      "Maximize the ROI from your current assets with our smart analytics. Our app integrates seamlessly with your existing systems to enhance their performance without additional investments.",
  },
  {
    title: "Simplify Data Science for Better Decision Making",
    image: hardDrive,
    description:
      "Our no-code solution demystifies data science, making it accessible to everyone in your organization. Empower your team to make informed decisions quickly, with easy-to-understand analytics and visualizations.",
  },
];
export default function ContactUs() {
  return (
    <div>
      <div className="relative md:px-20">
        <GridBackground />
        <div className="flex flex-col justify-between lg:flex-row gap-8 p-8">
          <div className="md:w-1/2">
            <h2 className="title-gradient">Contact us</h2>
            <p className="mb-8">
              One of our product experts will provide a demonstration tailored
              to your needs.
            </p>
            <div className="space-y-4">
              {details.map((ele, index) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <img src={ele.image} alt={ele.text} className="h-5 w-5" />
                    <p>{ele.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <ContactForm type="expanded" className="md:w-1/2" />
        </div>
      </div>
      <div className="bg-secondaryBg mt-5 md:px-10">
        <br />
        <h2 className="title-gradient text-center md:w-1/2 mx-auto">
          Learn How Akila Analytics Can Help Your Business
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((ele) => {
            return (
              <div
                key={ele.title}
                className="bg-formBackground p-8 my-8 rounded-lg z-50j"
              >
                <img src={ele.image} alt="" />
                <br />
                <h4 className="title-gradient">{ele.title}</h4>
                <br />
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
