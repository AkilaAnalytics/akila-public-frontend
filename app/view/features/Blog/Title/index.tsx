//import { PeopleStandingInRoom } from '~/view/assets'

import { logger } from "~/utils";
import ShareOnSocialMedia from "../ShareOnSocialMedia";
import { useLoaderData } from "@remix-run/react";

interface IProps {
  category: "Private Equity" | "Technology";
  date: string;
  title: string;
  subTitle: string;
  coverImageLink: string;
}

export default function Title({
  category,
  date,
  title,
  subTitle,
  link,
}: IProps) {
  logger.log(link, "<<< coverImageLink from Blog/Title/index");
  const dateObj = new Date(date);
  // Function to get month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateObj.getUTCMonth()]; // Get full month name

  // Function to get the day with an ordinal suffix (st, nd, rd, th)
  const day = dateObj.getUTCDate();
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Catch exceptions for 11th, 12th, 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;
  const year = dateObj.getUTCFullYear();
  const formattedDate = `${month} ${dayWithSuffix}, ${year}`;
  return (
    <div>
      <img src={link} alt="Data Science" className="h-[50vh] w-full" />
      <div className="static h-auto w-full transform rounded-md bg-secondaryBackground p-3 md:relative md:left-20 md:top-[-20vh] md:h-auto md:w-2/3">
        <div>
          <p className="font-sans-serif font-bold tracking-wide text-periwinkle">
            {category}
          </p>
          <br />
          <br />

          <h1 className="text-6xl">{title}</h1>
          <h5>{subTitle}</h5>
        </div>
        <br />
        <br />
        <div className="font-light">{formattedDate}</div>
        <br />
        <ShareOnSocialMedia
          title={title}
          subTitle={subTitle}
          url="akilaanalytics.com"
        />
      </div>
    </div>
  );
}
