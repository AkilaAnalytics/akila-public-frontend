import { upload, file, process, chart, howItWorks } from "~/view/assets";
import { SectionBreak } from "~/view/components";
import FigmaCard from "./BackgroundCard";

const cards = [
  {
    title: "Load Data",
    description:
      "Gain Deeper Insights, Improve Business Outcomes Unlock the full potential of your data with Akila Analytics. Scale your data analytics capabilities with ease and drive business growth.",
    image: upload,
  },
  {
    title: "Process data",
    description:
      "Unlock the power of your data and discover insights effortlessly with Akila Analytics' intuitive data exploration workflow.",
    image: process,
  },
  {
    title: "Forecasting",
    description:
      "Take your business to the next level with Akila Analytics' powerful machine learning workflow. Build models with ease and make data-driven decisions.",
    image: file,
  },
  {
    title: "Visualize",
    description:
      "We understand you have preferred data visualization tools, and we don't want to change that. Akila outputs data to your preferred visualization tools.",
    image: chart,
  },
];
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="">
      <SectionBreak breakText="The Akila Workflow" title="How it works" />
      <div className="flex gap-5 flex-col md:flex-row mt-10 items-start overflow-hidden">
        <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-2/5">
          {cards.map((ele, index) => {
            return (
              <div
                key={index}
                className="px-5 bg-cardBg w-full h-60 rounded-lg p-8 flex flex-col gap-5"
              >
                <img src={ele.image} alt={ele.title} className="h-10 w-10" />
                <h5>{ele.title}</h5>
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 md:mt-0 md:ml-6 lg:ml-10 w-full md:w-1/2 lg:w-3/5 flex justify-center px-4 md:px-0">
          <div className="w-full md:max-w-none overflow-hidden">
            <div className="w-full max-h-[50vh] md:max-h-none overflow-hidden">
              <FigmaCard>
                <img
                  src={howItWorks}
                  alt="How it works"
                  className="bg-transparent w-full h-full max-w-full max-h-full object-contain object-center"
                />
              </FigmaCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
