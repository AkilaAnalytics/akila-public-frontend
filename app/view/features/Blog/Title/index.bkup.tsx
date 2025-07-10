import { logger } from "~/utils";
import ShareOnSocialMedia from "../ShareOnSocialMedia";

interface IProps {
  category: string;
  date: string;
  title: string;
  subTitle: string;
  link: string;
}

export default function Title({
  category,
  date,
  title,
  subTitle,
  link,
}: IProps) {
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
    <div className="relative">
      <img
        src={link}
        alt="Data Science"
        className="h-[50vh] w-full object-cover bg-black opacity-40"
      />

      <div className="absolute top-10 left-0 w-full md:left-20 md:bottom-20 md:w-2/3 transform rounded-md bg-secondaryBackground bg-opacity-80 p-4">
        <div>
          <p className="font-sans-serif font-bold tracking-wide text-periwinkle">
            {category}
          </p>
          <h1 className="text-6xl text-white">{title}</h1>
          <h5>{subTitle}</h5>
        </div>
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
