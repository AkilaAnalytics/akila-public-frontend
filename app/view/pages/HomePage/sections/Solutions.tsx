import { businessAnalyst, dataScientist, productManager } from "~/view/assets";
import { SectionBreak } from "~/view/components";

const description =
  "Whether you're a Data Scientist, Business Analyst, or Product Manager - Akila adapts to your needs, streamlining workflows and enabling smarter decisions";
export default function Solutions() {
  return (
    <div className="">
      <SectionBreak
        breakText="For Who"
        title="Solutions Tailored to Every Role"
        description={description}
      />
      <div className="flex mx-auto mt-10">
        <div className="border-white/5 border-[1px] p-10">
          <h4>Data Scientist</h4>
          <p className="md:w-3/4">
            Data scientists are leveraging Akila to streamline data cleaning and
            model building, ultimately putting the process back in the hands of
            the business.
          </p>
          <img src={dataScientist} alt="" className="w-full md:w-[40vw]" />
        </div>
        <div className="border-white/5 border-[1px] p-10">
          <h4>Business Analyst</h4>
          <p className="md:w-3/4">
            Business Analysts are leveraging Akila to connect models and
            applications from Data Scientist and Software Engineers into
            visualizations for insights and reporting.
          </p>
          <img src={businessAnalyst} alt="" className="w-full md:w-[40vw]" />
        </div>
      </div>
      <div className="border-white/5 border-[1px] p-10">
        <h4>Product Manager</h4>
        <p className="md:w-3/4">
          Product Manager at Akila identifies the customer need and the larger
          business objectives that a product or feature will fulfill,
          articulates what success looks like, and aligns the team around that
          vision.
        </p>
        <img
          src={productManager}
          alt=""
          className="w-full md:w-[60vw] mx-auto mt-10"
        />
      </div>
    </div>
  );
}
