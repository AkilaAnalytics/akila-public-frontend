import React from "react";
import { RocketLaunchIcon, CogIcon } from "@heroicons/react/24/outline";
import { logger } from "~/utils";
import { Link, useLoaderData } from "react-router";

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
  <Link to={`/product${href}`} className="w-full md:w-96">
    <div className="group relative overflow-hidden rounded-xl border-[1px] border-gray-300 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="absolute top-2 right-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-lg z-10">
        {category}
      </div>

      {/* Product Image */}
      <div className="relative h-96">
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

        <div className="text-2xl font-bold mb-3">{price}</div>

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
  const { products } = useLoaderData();
  logger.log({ products, source: "Hardware page" });

  // Convert the products object to an array and add href for each product
  const productsArray = Object.values(products).map((product) => ({
    ...product,
    href: `/hardware/${product.id}`, // Generate the href from product id
    price: product.priceDisplay, // Use priceDisplay for rendering
  }));

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
      <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-5">
          {productsArray.map((product, index) => (
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
      <div className="contact-us-gradient py-16">
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
