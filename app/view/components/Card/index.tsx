import { Plus } from "lucide-react";

interface Props {
  title: string;
  image: string;
  description: string;
}

export default function FeatureCard({ title, image, description }: Props) {
  return (
    <div className="bg-cardBg rounded-2xl p-8 relative overflow-hidden max-w-md mx-auto">
      <h6 className="text-white font-medium mb-8 uppercase">{title}</h6>

      <img src={image} alt={title} />

      {/* Description */}
      <p className="cardText text-base leading-relaxed mb-4">{description}</p>

      {/* Plus button */}
      <div className="absolute bottom-6 right-6">
        <button className="w-8 h-8 border border-border rounded-full flex items-center justify-center">
          <Plus className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
