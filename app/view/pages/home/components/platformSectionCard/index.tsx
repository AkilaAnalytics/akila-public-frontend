import { Link } from "react-router";

import { PlatformSectionCardBgImg } from "~/view/assets";

interface IProps {
  logo: string;
  title: string;
  link: string;
}

export default function PlatformSectionCard({ logo, title, link }: IProps) {
  return (
    <Link
      to={link}
      className="flex min-h-[169px] w-full max-w-[160px] flex-col items-center justify-center hover:scale-105"
      style={{
        backgroundImage: `url(${PlatformSectionCardBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="px-2 text-center text-[16px] font-medium uppercase">
          {title}
        </div>
        <br />

        <img src={logo} alt="" className="mx-auto mb-[20px]" />
      </div>
    </Link>
  );
}
