import { greenCheckMark } from "~/view/assets";
import { Link } from "react-router";

interface IProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  keyPoints: Array<string>;
  path: string;
}

export default function Card({
  title,
  price,
  description,
  buttonText,
  keyPoints,
  path,
}: IProps) {
  return (
    <div className="min-h-[500px] w-full md:w-[25vw] textBody rounded-lg border border-gray-200 bg-secondaryBackground p-4 shadow sm:p-8">
      <div className="flex min-h-full flex-col">
        <div className=" text-xl font-medium text-linkText">{title}</div>
        <div className="flex items-baseline">
          {price !== "Contact Us" && (
            <span className="text-3xl font-semibold">$</span>
          )}
          {price !== "Contact Us" ? (
            <span className="whitespace-nowrap text-5xl font-extrabold tracking-tight">
              {price}
            </span>
          ) : (
            <span className="whitespace-nowrap text-4xl font-extrabold tracking-tight">
              {price}
            </span>
          )}
        </div>
        <br />
        <br />

        <p className="text-md text-white">{description}</p>
        <br />
        <br />

        <ul className="">
          {keyPoints.map((keyPoint: any, index: number) => (
            <li key={index} className="flex space-x-3">
              <img
                src={greenCheckMark}
                className="h-5 w-5"
                alt="Green check mark"
              />
              <span className="text-base font-normal leading-tight text-greyText">
                {keyPoint}
              </span>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <Link to={path} className="button-primary">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
