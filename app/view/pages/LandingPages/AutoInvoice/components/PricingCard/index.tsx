import CheckMarkIcon from "../CheckMark";

interface Props {
  title: string;
  price?: string;
  subTitle?: string;
  features: string[];
  handleGetStartedClick: () => void;
  showGreenChecks: boolean;
  buttonText: string;
}

export default function PricingCard({
  title,
  price,
  subTitle,
  features,
  handleGetStartedClick,
  showGreenChecks = true,
  buttonText,
}: Props) {
  return (
    <div className="w-full md:w-[20vw] border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {price && (
        <div className="text-3xl font-bold text-gray-900 mb-4">
          ${price}
          <span className="text-lg text-gray-600">/month</span>
        </div>
      )}
      {subTitle && (
        <div className="text-3xl font-bold text-gray-900 mb-4">{subTitle}</div>
      )}
      <ul className="space-y-3 mb-8 text-black flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center space-x-2">
            <CheckMarkIcon className="h-5 w-5 text-green-500" />
            <span className="h-5">{f}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleGetStartedClick}
        className="relative my-auto cursor-pointer w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:border-gray-400 transition-all duration-200"
      >
        {buttonText}
      </button>
    </div>
  );
}
