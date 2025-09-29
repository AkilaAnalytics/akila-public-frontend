import { Link } from "react-router";
import { users, bars, lineChart } from "~/view/assets";
import { GridBackground, ContactForm } from "~/view/components";

const cards = [
  {
    image: users,
    text: "Learn how Akila Analytics can help you collaborate with your team in real time, share insights, and make informed decisions faster",
  },
  {
    image: bars,
    text: "Use Akila to quickly analyze data and drive results",
  },
  {
    image: lineChart,
    text: "Improve your business performance by using Akila to make data-driven decisions.",
  },
];

export default function GettingStarted() {
  return (
    <section id="getting-started" className="relative flex flex-col md:flex-row mt-10">
      <GridBackground />
      <div className="py-20 flex flex-col md:flex-row z-50 px-10">
        <div className="md:w-1/2 m-10 p-10 h-3/4 ">
          <h2 className="title-gradient">
            Getting Started with Akila Analytics
          </h2>
          {cards.map((ele, index) => {
            return (
              <div key={index} className="flex gap-5 mt-5">
                <img src={ele.image} alt="" />
                <p>{ele.text}</p>
              </div>
            );
          })}
          <div className="flex gap-5 mt-10">
            <button className="button-secondary">
              <Link to="/watch-demo">Request Demo</Link>
            </button>
          </div>
        </div>
        <ContactForm type="short" className="w-1/2 z-50" />
      </div>
    </section>
  );
}
