import ButtonBar from "../ButtonsBar";

interface Props {
  image: string;
  title?: string;
  subTitle?: string;
  superTitle?: string;
  horizontalLine?: boolean;
}

export default function BannerImage({
  title = "",
  subTitle = "",
  image,
  superTitle = "",
  horizontalLine = false,
}: Props) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${image})`,
  };

  return (
    <div
      className="mb-[50px] flex h-[500px] flex-col justify-center bg-cover bg-center p-4"
      style={styles}
    >
      <div className="max-w-[522px] sm:pl-[164px]">
        <h4 className="mb-[10px] font-sans text-[15px] font-semibold leading-7 text-[#E7E7E7] sm:text-[20px]">
          {superTitle}
        </h4>
        <div className="mb-[12px] sm:mb-[17px]">
          <h1
            className={` text-[25px] ${
              horizontalLine ? "mb-[15px]" : ""
            } font-semibold text-white sm:text-3xl md:text-4xl`}
          >
            {title}
          </h1>
          {horizontalLine && (
            <div className="h-[3px] max-w-[50px] bg-[#3134DB]"></div>
          )}
        </div>

        <p className="mb-10 text-sm text-white md:text-lg">{subTitle}</p>
        <div className="flex flex-col justify-start gap-3 space-x-4 sm:flex-row">
          <ButtonBar />
        </div>
      </div>
    </div>
  );
}
