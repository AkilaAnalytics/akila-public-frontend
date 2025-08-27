import { users, bars, lineChart } from "~/view/assets";
import { GridBackground } from "~/view/components";

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

const inputClass =
  "z-50 p-2 rounded-md focus:outline-none bg-gradient-to-r from-[rgb(25,26,27)] to-[rgb(23,24,25)]";
export default function GettingStarted() {
  return (
    <div className="relative flex flex-col md:flex-row mt-10">
      <GridBackground />
      <div className="py-20 flex flex-col md:flex-row z-50 px-10">
        <div className="md:w-1/2 m-10 p-10 h-3/4 ">
          <h2 className="title-gradient">
            Getting Started with Akila Analytics
          </h2>
          {cards.map((ele) => {
            return (
              <div className="flex gap-5 mt-5">
                <img src={ele.image} alt="" />
                <p>{ele.text}</p>
              </div>
            );
          })}
          <div className="flex gap-5 mt-10">
            <button className="button-primary">Sign Up</button>
            <button className="button-secondary">Request Demo</button>
          </div>
        </div>
        <div className="flex flex-col w-1/2 bg-black border-borderColor rounded-md">
          <div className="p-5 flex flex-col border-white/5 border-[1px] rounded-md">
            <h6>Contact Us</h6>
            <br />

            <label htmlFor="firstName" className="mt-2">
              First
            </label>
            <input name="firstName" type="text" className={inputClass} />
            <label htmlFor="lastName" className="mt-2">
              Last
            </label>
            <input name="lastName" type="text" className={inputClass} />
            <label htmlFor="email" className="mt-2">
              Email
            </label>
            <input name="email" type="email" className={inputClass} />
            <label htmlFor="message" className="mt-2">
              Message
            </label>
            <textarea
              rows={6}
              name="message"
              type="text"
              className={inputClass}
            />
            <br />
            <button className="button-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
