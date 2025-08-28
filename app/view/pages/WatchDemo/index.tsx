import { users, chartBarThin, chartLineThin } from "~/view/assets";
import { ContactForm, GradientLine } from "~/view/components";
import background from "./background.svg";

const icons = [
  {
    image: users,
    text: "Learn how Akila Analytics can help you collaborate with your team in real time, share insights, and make informed decisions faster",
  },
  {
    image: chartBarThin,
    text: "Use Akila to quickly analyze data and drive results",
  },
  {
    image: chartLineThin,
    text: "Improve your business performance by using Akila to make data-driven decisions.",
  },
];
export default function WatchDemo() {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:px-20">
      <div>
        <div className="flex gap-2">
          <p>See Akila in Video</p> <GradientLine position="right" />
        </div>
        <h2 className="title-gradient">Watch Demo</h2>
        <p>
          See how Akila Analytics can help you gain insights from your data,
          make data-driven decisions, and drive business growth.
        </p>
        <div
          className="relative mb-[29px] h-0 w-full max-w-[540px] overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/ksr7Nd0Fb1k?si=Z-bxTfIy138XWVc7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            rel={"0"}
            allowFullScreen
          ></iframe>
        </div>
        {icons.map((ele) => {
          return (
            <div className="flex gap-5 mt-5">
              <img src={ele.image} alt="" />
              <p className="md:w-1/2">{ele.text}</p>
            </div>
          );
        })}
      </div>
      <ContactForm type="expanded" className="md:w-1/2" />
    </div>
  );
}
