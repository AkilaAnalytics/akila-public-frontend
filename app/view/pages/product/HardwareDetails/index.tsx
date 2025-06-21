import React, { useState } from "react";
import {
  ShoppingCartIcon,
  ArrowLeftIcon,
  CpuChipIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Link, useLoaderData } from "@remix-run/react";

// Component for individual spec row
interface ProductSpec {
  item: string;
  product: string;
}
interface SpecRowProps {
  spec: ProductSpec;
  isEven: boolean;
}

const SpecRow: React.FC<SpecRowProps> = ({ spec, isEven }) => (
  <tr
    className={`${
      isEven ? "bg-gray-50" : "bg-gray-500"
    } border-b border-gray-200`}
  >
    <td className="px-4 py-3 text-sm font-medium text-gray-900 capitalize">
      {spec.item.replace("_", " ")}
    </td>
    <td className="px-4 py-3 text-sm text-gray-700">{spec.product}</td>
  </tr>
);

// Main product detail component
export default function ProductDetail() {
  const { product } = useLoaderData<LoaderData>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Stripe checkout handler
  const handleCheckout = async () => {
    setIsCheckingOut(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: product.stripePriceId,
          productId: product.stripeProductId,
          quantity: 1,
        }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("There was an error processing your request. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/product/hardware"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-w-4 aspect-h-3 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-bold text-green-600">
                  {product.priceDisplay}
                </span>
                <div className="flex items-center space-x-2">
                  {product.inStock ? (
                    <>
                      <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-green-600 font-medium">
                        In Stock
                      </span>
                    </>
                  ) : (
                    <>
                      <CpuChipIcon className="w-5 h-5 text-red-500" />
                      <span className="text-red-600 font-medium">
                        Out of Stock
                      </span>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={!product.inStock || isCheckingOut}
                className={`w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                  product.inStock && !isCheckingOut
                    ? "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              >
                {isCheckingOut ? (
                  "Processing..."
                ) : (
                  <>
                    <ShoppingCartIcon className="w-6 h-6 mr-2" />
                    {product.inStock ? "Buy Now" : "Out of Stock"}
                  </>
                )}
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ShieldCheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold  mb-8">Technical Specifications</h2>
          <div className="rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                    Component
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, index) => (
                  <SpecRow key={index} spec={spec} isEven={index % 2 === 0} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <ServerIcon className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">
              Support & Warranty
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                3-Year Warranty
              </h4>
              <p className="text-gray-600">
                Comprehensive coverage for parts and labor
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Pre-Configured
              </h4>
              <p className="text-gray-600">Professional setup and configured</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600">Technical support included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
