export * from "./aws/index.server";
export * from "./stripe/index.server";
export { default as logger } from "./logger.server";
export { default as prisma } from "./prisma.server";
export { default as pool } from "./pool.server";
export { createUserIfNotExists } from "./sql.server";

export interface ProductSpec {
  item: string;
  product: string;
}

export interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  priceDisplay: string;
  category: string;
  image: string;
  images: string[];
  videos: string[];
  specs: ProductSpec[];
  features: string[];
  inStock: boolean;
  stripeLink: string;
}

export const products: Record<string, ProductData> = {
  "workstation-starter": {
    id: "workstation-starter",
    name: "Workstation Starter",
    description:
      "Budget-friendly business workstation designed for small businesses, content creation, and light AI workloads. Powerful RTX 3090 graphics with reliable AMD Ryzen performance.",
    price: 3100 * 100, // in cents for stripe
    priceDisplay: "$3,100",
    category: "Enterprise",
    image: "/hardware/fractal-north.jpg",
    images: [
      "/hardware/fractal-north.jpg",
      "/hardware/fractal-north-top.jpg",
      "/hardware/server-side.png",
    ],
    videos: ["server-1.mp4"],
    specs: [
      {
        item: "Operating System",
        product: "Proxmox",
      },
      {
        item: "Processor",
        product: "AMD Ryzen 7 7700 3.80GHz 8 Core 16 Thread",
      },
      {
        item: "Motherboard",
        product: "MSI MAG B650 Tomahawk Wifi Gaming Desktop Motherboard",
      },
      {
        item: "Memory",
        product: "CORSAIR VENGEANCE RGB 64GB (2x32GB) DDR5 6000MHz C40",
      },
      {
        item: "GPU",
        product: "NVIDIA RTX 3090 24GB GDDR6X",
      },
      {
        item: "Storage",
        product: "WD BLACK SN850X 2TB Internal SSD PCIe Gen 4 x4 NVMe",
      },
      {
        item: "CPU Cooler",
        product: "Thermalright Phantom Spirit 120 SE ARGB CPU Cooler",
      },
      {
        item: "PSU",
        product: "CORSAIR RM850e (2025) Fully Modular ATX Power Supply",
      },
      {
        item: "Case",
        product: "Fractal Design North XL Charcoal Black TG Dark",
      },
    ],
    features: [
      "Optimized for small business and content creation workflows",
      "RTX 3090 24GB for AI/ML inference and GPU acceleration",
      "High-speed DDR5 memory for multitasking performance",
      "2TB NVMe SSD for fast data access and large project storage",
      "Professional build quality with premium components",
      "1-year warranty with business support options",
    ],
    inStock: true,
    stripeLink: "https://buy.stripe.com/4gM28qbtK9PA5Vb2Hn53O00",
  },
  "enterprise-workstation": {
    id: "enterprise-workstation",
    name: "Enterprise Workstation",
    description:
      "Professional-grade workstation with Intel Xeon reliability and ECC memory. Perfect for engineering firms, data science teams, and mission-critical business applications.",
    price: 7549 * 100,
    priceDisplay: "$7,549",
    category: "Enterprise",
    image: "/hardware/mid/fractal-north-open.png",
    images: [
      "/hardware/mid/fractal-north-open.png",
      "/hardware/fractal-north-top.jpg",
      "/hardware/server-side.png",
    ],
    videos: ["server-1.mp4"],
    specs: [
      {
        item: "Operating System",
        product: "Proxmox",
      },
      {
        item: "Processor",
        product:
          "Intel Xeon E-2388G 3.2GHz Eight Core Processor, 8C/16T, 8GT/s, 16M Cache, Turbo (95W), 3200 M",
      },
      {
        item: "Motherboard",
        product: "ASUS W790-ACE Pro WS Intel LGA 4677 CEB Motherboard",
      },
      {
        item: "Memory",
        product:
          "Kingston FURY Renegade Pro 128GB (4 x 32GB) DDR5-5600 PC5-44800 CL28 Quad Channel ECC Registered Memory Modules KF556R28RBE2K41 - Black",
      },
      {
        item: "GPU",
        product:
          "PNY NVIDIA GeForce RTX 4090 Verto Triple Fan 24GB GDDR6X PCIe 4.0 Graphics Card",
      },
      {
        item: "Storage",
        product:
          "Samsung 990 PRO 2TB Samsung V NAND 3-bit MLC PCIe Gen 4 x4 NVMe M.2 Internal SSD",
      },
      {
        item: "CPU Cooler",
        product: "Noctua NH-U12S chromax.black CPU Cooler",
      },
      {
        item: "PSU",
        product:
          "Corsair RM1000x 1000 Watt Cybenetics Gold ATX Fully Modular Power Supply - ATX 3.1 Compatible",
      },
      {
        item: "Case",
        product: "Fractal Design North XL Charcoal Black TG Dark",
      },
      {
        item: "Fans",
        product: "be quiet! Pure Wings 3 140mm ",
      },
    ],
    features: [
      "Enterprise-grade Intel Xeon processor for 24/7 reliability",
      "ECC memory prevents data corruption in critical applications",
      "IPMI remote management for IT administration",
      "Workstation motherboard with enterprise chipset support",
      "Enhanced power delivery with 1000W PSU for stable operation",
      "3-year enterprise warranty with priority business support",
    ],
    inStock: true,
    stripeLink: "https://buy.stripe.com/fZu8wO0P69PA2IZ1Dj53O01",
  },
  "ai-ml": {
    id: "ai-ml",
    name: "AI/ML Workstation",
    description:
      "Ultimate enterprise workstation featuring NVIDIA A100 GPU for large-scale machine learning, AI research, and high-performance computing. Built for organizations requiring maximum computational power.",
    price: 12179 * 100, // $3,535 in cents for Stripe ($2,718.60 + 30%)
    priceDisplay: "$12,179",
    category: "AI/ML",
    image: "/hardware/server-side.png",
    images: [
      "/hardware/fractal-north.jpg",
      "/hardware/fractal-north-top.jpg",
      "/hardware/server-side.png",
    ],
    videos: ["server-1.mp4"],
    specs: [
      {
        item: "Operating System",
        product: "Proxmox",
      },
      {
        item: "Processor",
        product:
          "Intel Xeon E-2388G 3.2GHz Eight Core Processor, 8C/16T, 8GT/s, 16M Cache, Turbo (95W), 3200 M",
      },
      {
        item: "Motherboard",
        product: "ASUS W790-ACE Pro WS Intel LGA 4677 CEB Motherboard",
      },
      {
        item: "Memory",
        product:
          "Kingston FURY Renegade Pro 128GB (4 x 32GB) DDR5-5600 PC5-44800 CL28 Quad Channel ECC Registered Memory Modules KF556R28RBE2K41 - Black",
      },
      {
        item: "GPU",
        product:
          "NVIDIA Tesla A100 Ampere 40 GB Graphics Processor Accelerator - PCIe 4.0 x16 - Dual Slot",
      },
      {
        item: "Storage",
        product:
          "Samsung 990 PRO 2TB Samsung V NAND 3-bit MLC PCIe Gen 4 x4 NVMe M.2 Internal SSD",
      },
      {
        item: "CPU Cooler",
        product: "Noctua NH-U12S chromax.black CPU Cooler",
      },
      {
        item: "PSU",
        product:
          "Corsair RM1000x 1000 Watt Cybenetics Gold ATX Fully Modular Power Supply - ATX 3.1 Compatible",
      },
      {
        item: "Case",
        product: "Fractal Design North XL Charcoal Black TG Dark",
      },
      {
        item: "Fans",
        product: "be quiet! Pure Wings 3 140mm ",
      },
    ],
    features: [
      "NVIDIA A100 40GB - World's most advanced AI accelerator",
      "40GB HBM2e memory with 19.5 TFLOPS FP64 performance",
      "Optimized for large language model training and inference",
      "Enterprise Xeon processor with ECC memory for data integrity",
      "1600W Titanium efficiency PSU for A100's 400W TDP",
      "5-year enterprise warranty with dedicated AI/ML support team",
    ],
    inStock: true,
    stripeLink: "https://buy.stripe.com/28EaEW8hy3rcdnD1Dj53O02",
  },
};

export const getProductData = (slug: string): ProductData | null => {
  return products[slug] || null;
};
