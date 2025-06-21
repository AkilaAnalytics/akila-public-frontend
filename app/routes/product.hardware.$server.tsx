export { HardwareDetails as default } from "~/view/pages";
import { json, MetaFunction } from "@remix-run/node";
import { logger } from "~/utils";

// Types
interface ProductSpec {
  item: string;
  product: string;
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
  specs: ProductSpec[];
  features: string[];
  inStock: boolean;
  stripeProductId: string;
  stripePriceId: string;
}
interface LoaderData {
  product: ProductData;
}

// Mock product data - replace with your database/API calls
const getProductData = (slug: string): ProductData | null => {
  const products: Record<string, ProductData> = {
    "analytics-powerhouse-pro": {
      id: "analytics-powerhouse-pro",
      name: "Analytics Powerhouse Pro",
      description:
        "Ultimate data processing workstation designed for demanding analytics workloads and machine learning tasks.",
      price: 429900, // Price in cents for Stripe
      priceDisplay: "$4,299",
      category: "Workstation",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=600&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=600&fit=crop&crop=center",
      ],
      specs: [
        {
          item: "processor",
          product: "AMD Ryzen 7 7700 3.80GHz 8 Core 100-000000592 16 Thread",
        },
        {
          item: "motherboard",
          product: "MSI MAG B650 Tomahawk Wifi Gaming Desktop Motherboard",
        },
        {
          item: "memory",
          product: "CORSAIR - VENGEANCE RGB 64GB (2x32GB) DDR5 6000MHz C40",
        },
        { item: "GPU", product: "NVIDIA GeForce RTX 3090 24GB GDDR6X" },
        {
          item: "SSD",
          product: "WD - BLACK SN850X 2TB Internal SSD PCIe Gen 4 x4 NVMe",
        },
        {
          item: "CPU Cooler",
          product: "Thermalright Phantom Spirit 120 SE ARGB CPU Cooler",
        },
        {
          item: "PSU",
          product:
            "CORSAIR RM850e (2025) Fully Modular Low-Noise ATX Power Supply",
        },
        {
          item: "case",
          product: "Fractal Design North XL Charcoal Black TG Dark",
        },
      ],
      features: [
        "Optimized for data analytics and machine learning workloads",
        "Professional-grade components with enterprise reliability",
        "Pre-installed with analytics software suite",
        "3-year warranty with priority support",
        "Pre-Configured with OS and analytical tools",
        "Liquid cooling system for sustained performance",
      ],
      inStock: true,
      stripeProductId: "prod_analytics_powerhouse_pro",
      stripePriceId: "price_analytics_powerhouse_pro",
    },
    "data-cruncher-server": {
      id: "data-cruncher-server",
      name: "Data Cruncher Server",
      description:
        "Enterprise-grade server designed for big data processing with redundancy and scalability built-in.",
      price: 749900,
      priceDisplay: "$7,499",
      category: "Server",
      image:
        "https://images.unsplash.com/photo-1518484388050-cdc2ad6b552c?w=800&h=600&fit=crop&crop=center",
      images: [
        "https://images.unsplash.com/photo-1518484388050-cdc2ad6b552c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
      ],
      specs: [
        {
          item: "processor",
          product: "Dual Intel Xeon Silver 4314 2.40GHz 16 Core",
        },
        {
          item: "motherboard",
          product: "Supermicro X12DPi-NT6 Dual Socket LGA 4189",
        },
        { item: "memory", product: "128GB (8x16GB) DDR4-3200 ECC Registered" },
        { item: "storage", product: "4TB NVMe SSD RAID 1 Configuration" },
        { item: "network", product: "Dual 10GbE Network Interface Cards" },
        { item: "psu", product: "Redundant 1200W 80+ Platinum Power Supplies" },
        {
          item: "case",
          product: "2U Rackmount Server Chassis with Hot-Swap Bays",
        },
        {
          item: "management",
          product: "IPMI 2.0 with dedicated management port",
        },
      ],
      features: [
        "Enterprise-grade redundancy and reliability",
        "Hot-swappable components for zero downtime",
        "Remote management and monitoring capabilities",
        "5-year enterprise warranty",
        "24/7 technical support included",
        "Rack mounting hardware included",
      ],
      inStock: true,
      stripeProductId: "prod_data_cruncher_server",
      stripePriceId: "price_data_cruncher_server",
    },
    // Add more products as needed
  };

  return products[slug] || null;
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { server } = params;
  logger.log({ server, source: "loader product.hardware.$server" });

  if (!server) {
    throw new Response("Product not found", { status: 404 });
  }

  const product = getProductData(server);

  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }

  return json<LoaderData>({ product });
}

export const meta: MetaFunction = () => {
  const title = "Servers, Computers, GPUS & Hardware for sale.";
  const description =
    "Purchase PCs, servers, GPUs, and hardware directly from Akila.";
  return [
    { title: title },
    { property: "og:title", content: title },
    {
      name: "description",
      content: description,
    },
    {
      name: "og:description",
      content: description,
    },
  ];
};
