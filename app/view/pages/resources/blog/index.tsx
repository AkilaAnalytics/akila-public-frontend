import { DataExplorationBg, BlogImage } from "~/view/assets";
import { BannerImage, GettingStartedSection } from "~/view/components";

import { LatestMediaNews, BlogCard } from "./components";

export default function Blog() {
  return (
    <div>
      <div>
        <BannerImage
          title="Understand your data"
          subTitle="Unlock the power of your data and discover insights effortlessly with Akila Analytics' intuitive data exploration workflow. Try it now!"
          image={DataExplorationBg}
        />
      </div>

      <LatestMediaNews heading="Latest Media & News">
        {blogData.map(({ img, title, description, date, timeToRead }) => (
          <BlogCard
            key={title}
            img={img}
            title={title}
            description={description}
            date={date}
            timeToRead={timeToRead}
          />
        ))}
      </LatestMediaNews>

      <GettingStartedSection />
    </div>
  );
}

const blogData = [
  {
    img: BlogImage,
    title: "Are Checked Out Workers Hurting your Retail Business?",
    description:
      "Data is power. Yet if you are like many retailers, that power is only bestowed on a handful of executives who spend most of their time in the back office. That’s hardly a recipe for success, especially when most of your employees are serving customers on the frontlines and their...",
    date: "Monday, February 6, 2023",
    timeToRead: "5 min",
  },
  {
    img: BlogImage,
    title: "Are Checked Out Workers Hurting your Retail Business?",
    description:
      "Data is power. Yet if you are like many retailers, that power is only bestowed on a handful of executives who spend most of their time in the back office. That’s hardly a recipe for success, especially when most of your employees are serving customers on the frontlines and their...",
    date: "Monday, February 6, 2023",
    timeToRead: "5 min",
  },
  {
    img: BlogImage,
    title: "Are Checked Out Workers Hurting your Retail Business?",
    description:
      "Data is power. Yet if you are like many retailers, that power is only bestowed on a handful of executives who spend most of their time in the back office. That’s hardly a recipe for success, especially when most of your employees are serving customers on the frontlines and their...",
    date: "Monday, February 6, 2023",
    timeToRead: "5 min",
  },
  {
    img: BlogImage,
    title: "Are Checked Out Workers Hurting your Retail Business?",
    description:
      "Data is power. Yet if you are like many retailers, that power is only bestowed on a handful of executives who spend most of their time in the back office. That’s hardly a recipe for success, especially when most of your employees are serving customers on the frontlines and their...",
    date: "Monday, February 6, 2023",
    timeToRead: "5 min",
  },
  {
    img: BlogImage,
    title: "Are Checked Out Workers Hurting your Retail Business?",
    description:
      "Data is power. Yet if you are like many retailers, that power is only bestowed on a handful of executives who spend most of their time in the back office. That’s hardly a recipe for success, especially when most of your employees are serving customers on the frontlines and their...",
    date: "Monday, February 6, 2023",
    timeToRead: "5 min",
  },
  {
    img: BlogImage,
    title: "Are Checked Out Workers Hurting your Retail Business?",
    description:
      "Data is power. Yet if you are like many retailers, that power is only bestowed on a handful of executives who spend most of their time in the back office. That’s hardly a recipe for success, especially when most of your employees are serving customers on the frontlines and their...",
    date: "Monday, February 6, 2023",
    timeToRead: "5 min",
  },
];
