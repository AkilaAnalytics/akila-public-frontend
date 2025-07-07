import CheckMarkIcon from "../CheckMark";

interface Props {
  price: string;
  features: string[];
  handleGetStartedClick: () => void;
}

export default function PricingCard({
  price,
  features,
  handleGetStartedClick,
}: Props) {
  return (
    <div className="w-full md:w-1/4 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200 justify-center mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro</h3>
      <div className="text-3xl font-bold text-gray-900 mb-4">
        ${price}
        <span className="text-lg text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8 text-black">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckMarkIcon className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleGetStartedClick}
        className="cursor-pointer w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:border-gray-400 transition-all duration-200"
      >
        Start Free Trial
      </button>
    </div>
  );
}
