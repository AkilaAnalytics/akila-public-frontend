import { upload, file, process, chart, howItWorks } from "~/view/assets";
import { SectionBreak } from "~/view/components";

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
    title: "Vsiualize",
    description:
      "We understand you have preferred data visualization tools, and we don't want to change that. Akila outputs data to your preferred visualization tools.",
    image: chart,
  },
];
export default function HowItWorks() {
  return (
    <div className="">
      <SectionBreak breakText="The Akila Workflow" title="How it works" />
      <div className="flex gap-5 flex-col md:flex-row justify-center mt-10">
        <div className="flex flex-col gap-5">
          {cards.map((ele) => {
            return (
              <div className="bg-cardBg w-full md:w-80 h-60 rounded-lg p-8 flex flex-col gap-5">
                <img src={ele.image} alt={ele.title} className="h-10 w-10" />
                <h5>{ele.title}</h5>
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
        <img src={howItWorks} alt="How it works" className="mb-auto" />
      </div>
    </div>
  );
}
