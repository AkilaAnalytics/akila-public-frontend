import GradientLine from "../GradientLine";

interface Props {
  breakText: string;
  title: string;
  description?: string;
}
export default function SectionTitle({ breakText, title, description }: Props) {
  return (
    <div>
      <div className="flex gap-2 justify-center text-center pt-16">
        <GradientLine position="left" />
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          {breakText}
        </p>
        <GradientLine position="right" />
      </div>
      <h4 className="text-center title-gradient">{title}</h4>
      {description && (
        <div className="text-center">
          <p className="w-full md:w-1/2 mx-auto subTitleText">{description}</p>
        </div>
      )}
    </div>
  );
}
