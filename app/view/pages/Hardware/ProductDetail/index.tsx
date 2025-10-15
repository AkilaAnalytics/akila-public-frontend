import React, { useState } from "react";
import {
  ShoppingCartIcon,
  ArrowLeftIcon,
  CpuChipIcon,
  ServerIcon,
  ShieldCheckIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { logger } from "~/utils";
import { Link, useLoaderData } from "react-router";

// Types
interface ProductSpec {
  item: string;
  product: string;
}

interface MediaItem {
  url: string;
  type: "image" | "video";
  thumbnail?: string;
}

interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  priceDisplay: string;
  category: string;
  image: string;
  images: string[];
  videos?: string[];
  specs: ProductSpec[];
  features: string[];
  inStock: boolean;
  stripeProductId: string;
  stripePriceId: string;
  stripeLink: string;
}

interface LoaderData {
  product: ProductData;
}

interface SpecRowProps {
  spec: ProductSpec;
  isEven: boolean;
}

// Component for individual spec row
const SpecRow: React.FC<SpecRowProps> = ({ spec, isEven }) => (
  <tr
    className={`${
      isEven ? "bg-white" : "bg-slate-50"
    } border-b border-slate-200 hover:bg-blue-50 transition-colors duration-150`}
  >
    <td className="px-6 py-4 text-sm font-semibold text-slate-800 capitalize">
      {spec.item.replace("_", " ")}
    </td>
    <td className="px-6 py-4 text-sm text-slate-700">{spec.product}</td>
  </tr>
);

// Main product detail component
export default function ProductDetail() {
  const { product } = useLoaderData<LoaderData>();
  logger.log({ product, source: "ProductDetail" });
  //return null;
  const [selectedMedia, setSelectedMedia] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Create unified media array from images and videos
  const mediaItems: MediaItem[] = [
    // Add all images first
    ...product.images.map((img) => ({
      url: img,
      type: "image" as const,
    })),
    // Add all videos with thumbnails
    ...(product.videos || []).map((video) => ({
      url: video,
      type: "video" as const,
      thumbnail: product.image, // Use main product image as video thumbnail fallback
    })),
  ];

  // Stripe checkout handler
  const handleCheckout = async () => {
    setIsCheckingOut(true);

    //try {
    //  const response = await fetch("/api/create-checkout-session", {
    //    method: "POST",
    //    headers: {
    //      "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify({
    //      priceId: product.stripePriceId,
    //      productId: product.stripeProductId,
    //      quantity: 1,
    //    }),
    //  });

    //  const session = await response.json();

    //  if (session.url) {
    //    window.location.href = session.url;
    //  }
    //} catch (error) {
    //  console.error("Error creating checkout session:", error);
    //  alert("There was an error processing your request. Please try again.");
    //} finally {
    //  setIsCheckingOut(false);
    //}
  };

  logger.log({ selectedMedia: mediaItems[selectedMedia] });
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
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              {mediaItems[selectedMedia]?.type === "video" ? (
                <video
                  src={`/hardware/${mediaItems[selectedMedia].url}`}
                  controls
                  className="w-full h-96 object-cover"
                  poster={mediaItems[selectedMedia].thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={`${mediaItems[selectedMedia].url}`}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              )}
            </div>

            {/* Thumbnail Grid */}
            {mediaItems.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {mediaItems.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMedia(index)}
                    className={`relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedMedia === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    {media.type === "video" ? (
                      <>
                        <img
                          src={media.thumbnail || product.image}
                          alt={`${product.name} video ${index + 1}`}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <PlayIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                          VIDEO
                        </div>
                      </>
                    ) : (
                      <img
                        src={media.url}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    )}
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
                <span className="text-4xl font-bold">
                  {product.priceDisplay}
                </span>
                <div className="flex items-center space-x-2">
                  {product.inStock ? (
                    <>
                      <ShieldCheckIcon className="w-5 h-5 text-green-800" />
                      <span className="text-green-800 font-medium">
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

              <Link
                to={product.stripeLink}
                className={`w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                  product.inStock && !isCheckingOut
                    ? "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              >
                {" "}
                <ShoppingCartIcon className="w-6 h-6 mr-2" />
                {product.inStock ? "Buy Now" : "Out of Stock"}
              </Link>
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
          <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
          <div className="rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-slate-700 to-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wide">
                    Component
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wide">
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
                Pre-Configured
              </h4>
              <p className="text-gray-600">Professional setup and configured</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Technical Support
              </h4>
              <p className="text-gray-600">Email and call support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
