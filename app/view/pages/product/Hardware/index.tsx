import React from "react";
import {
  RocketLaunchIcon,
  ChartBarIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
  category: string;
  href: string;
  slug: string;
}

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  category: string;
  href: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  category,
  href,
}) => (
  <Link to={href}>
    <div className="group relative overflow-hidden rounded-xl border-[1px] border-gray-300 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="absolute top-2 right-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-lg z-10">
        {category}
      </div>

      {/* Product Image */}
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
          {name}
        </h3>

        <div className="text-2xl font-bold text-green-600 mb-3">{price}</div>

        <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3 min-h-[4.5em]">
          {description}
        </p>

        <p className="inline-flex items-center justify-center w-full text-black px-4 py-2 bg-gray-300 transition-all duration-300 transform hover:scale-105">
          View Specs
          <RocketLaunchIcon className="w-4 h-4 ml-2" />
        </p>
      </div>
    </div>
  </Link>
);

export default function Products() {
  const products: Product[] = [
    {
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop&crop=center",
      name: "Analytics Powerhouse Pro",
      description:
        "Ryzen 7 7700 • RTX 3090 • 64GB DDR5 • 2TB NVMe - Ultimate data processing workstation",
      price: "$4,299",
      category: "Workstation",
      href: "/product/hardware/analytics-powerhouse-pro",
      slug: "analytics-powerhouse-pro",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop&crop=center",
      name: "Creator Studio Elite",
      description:
        "Intel i9-13900K • RTX 4080 • 32GB DDR5 • 1TB SSD - Content creation powerhouse",
      price: "$3,799",
      category: "Workstation",
      href: "/product/hardware/creator-studio-elite",
      slug: "creator-studio-elite",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591238372338-7c31bf51bf4c?w=400&h=300&fit=crop&crop=center",
      name: "Gaming Beast X1",
      description:
        "AMD Ryzen 9 7900X • RTX 4070 Ti • 32GB DDR5 • RGB Everything - Pure gaming performance",
      price: "$2,899",
      category: "Gaming",
      href: "/product/hardware/gaming-beast-x1",
      slug: "gaming-beast-x1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518484388050-cdc2ad6b552c?w=400&h=300&fit=crop&crop=center",
      name: "Data Cruncher Server",
      description:
        "Dual Xeon Silver • 128GB ECC • 4TB NVMe RAID • Enterprise reliability for big data",
      price: "$7,499",
      category: "Server",
      href: "/product/hardware/data-cruncher-server",
      slug: "data-cruncher-server",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=300&fit=crop&crop=center",
      name: "Budget Pro Workstation",
      description:
        "Ryzen 5 7600 • RTX 4060 • 16GB DDR5 • 500GB SSD - Professional performance, accessible price",
      price: "$1,599",
      category: "Workstation",
      href: "/product/hardware/budget-pro-workstation",
      slug: "budget-pro-workstation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555617778-020ec0c0d556?w=400&h=300&fit=crop&crop=center",
      name: "ML Training Rig",
      description:
        "Threadripper 7960X • Dual RTX 4090 • 256GB DDR5 • 8TB Storage - Machine learning beast",
      price: "$12,999",
      category: "Workstation",
      href: "/product/hardware/ml-training-rig",
      slug: "ml-training-rig",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613537616450-632bad74c030?w=400&h=300&fit=crop&crop=center",
      name: "Compact Gaming Mini",
      description:
        "Ryzen 7 7700 • RTX 4060 Ti • 16GB DDR5 • ITX Form Factor - Big performance, small footprint",
      price: "$2,199",
      category: "Gaming",
      href: "/product/hardware/compact-gaming-mini",
      slug: "compact-gaming-mini",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515521051023-c7fd14aa3e02?w=400&h=300&fit=crop&crop=center",
      name: "Enterprise Analytics Hub",
      description:
        "Custom server rack solution with redundancy, monitoring, and 24/7 support included",
      price: "$15,999",
      category: "Enterprise",
      href: "/product/hardware/enterprise-analytics-hub",
      slug: "enterprise-analytics-hub",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-r from-background to-darkGrey">
      {/* Header Section */}
      <div className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Servers, GPUs & Hardware
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Professional-grade hardware and data analytics solutions designed
              for modern businesses and enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              href={product.href}
            />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Something Custom?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team will design and build custom solutions tailored to your
            specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Free Consultation
              <CogIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
