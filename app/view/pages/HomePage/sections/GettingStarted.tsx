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
    <section
      id="getting-started"
      className="relative flex flex-col lg:flex-row mt-10"
    >
      <GridBackground />
      <div className="py-10 md:py-20 flex flex-col lg:flex-row z-50 px-4 md:px-10">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 mx-2 md:m-10 p-4 md:p-10">
          <h2 className="title-gradient text-2xl md:text-3xl lg:text-4xl mb-6">
            Getting Started with Akila Analytics
          </h2>
          {cards.map((ele, index) => {
            return (
              <div key={index} className="flex gap-3 md:gap-5 mt-4 md:mt-5 items-start">
                <img 
                  src={ele.image} 
                  alt="" 
                  className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-1"
                />
                <p className="text-sm md:text-base leading-relaxed">{ele.text}</p>
              </div>
            );
          })}
          <div className="flex gap-5 mt-8 md:mt-10">
            <button className="button-secondary w-full sm:w-auto">
              <Link to="/watch-demo" className="block text-center">
                Request Demo
              </Link>
            </button>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <ContactForm
          type="short"
          className="w-full lg:w-1/2 z-50 mx-2 lg:mx-0"
          source="Contact Form - Home Page Getting Started"
        />
      </div>
    </section>
  );
}
