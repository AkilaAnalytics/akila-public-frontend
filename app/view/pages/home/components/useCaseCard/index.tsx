import { Link } from "react-router";

interface IProps {
  category: string;
  heading: string;
  description: string;
  link: string;
  img: string;
}

export default function UseCaseCard({
  category,
  heading,
  description,
  link,
  img,
}: IProps) {
  return (
    <div className="">
      <Link to={link} className="p-4">
        <p className="button-gradient w-3/4 p-2 text-center">{category}</p>
        <div className="z-0 bg-gradient-to-r from-periwinkleDark to-periwinkle p-[1px]">
          <div className="z-10 bg-black">
            <div className="h-[66vh] w-full p-4 md:h-[70vh] md:w-[25vw]">
              <div className="mx-auto mt-5 h-2/3 w-11/12">
                <img
                  src={img}
                  alt={heading}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="w-full pl-4 text-left font-semibold tracking-wider">
                {heading}
              </p>
              <p className="p-4 text-sm">{description}</p>
              <br />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
