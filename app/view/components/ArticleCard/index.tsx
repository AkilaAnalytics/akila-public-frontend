import { Link } from "react-router";

interface ArticleCardProps {
  title: string;
  link: string;
  image_link?: string;
  category?: string;
  preview?: string;
  isPdf?: boolean;
}

export default function ArticleCard({ 
  title, 
  link, 
  image_link, 
  category, 
  preview, 
  isPdf = false 
}: ArticleCardProps) {
  return (
    <Link to={link} className="group">
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
        {image_link && (
          <div className="aspect-video bg-gray-600">
            <img 
              src={image_link} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        )}
        <div className="p-4">
          {category && (
            <span className="text-xs text-blue-400 uppercase tracking-wide">
              {category}
            </span>
          )}
          <h3 className="text-white font-semibold mt-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          {preview && (
            <p className="text-gray-400 text-sm mt-2 line-clamp-3">
              {preview}
            </p>
          )}
          {isPdf && (
            <span className="inline-block mt-2 text-xs bg-red-600 text-white px-2 py-1 rounded">
              PDF
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
