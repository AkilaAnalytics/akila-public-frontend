import {
  SolutionsByPositionsBussinessAnalyst,
  SolutionsByPositionsDataScientist,
  SolutionsByPositionProductManager,
  UseCasePrivateEquity,
  UseCaseMarketingAnalytics,
  UseCaseCustomerProfitability,
} from "~/view/assets";

export const useCaseData = [
  {
    category: "Private Equity",
    heading: "How Akila helps private equity firms during due diligence",
    description:
      "Use Akila Analytics to quickly analyze data during due diligence, identify opportunities, and make data-driven investment decisions.",
    img: UseCasePrivateEquity,
    link: "/use-cases/private-equity",
  },
  {
    category: "Marketing Analytics",
    heading: "Increasing the effectiveness of marketing analytics",
    description:
      "Analyze trends, identify profitable segments, and develop targeted campaigns for increased ROI.",
    img: UseCaseMarketingAnalytics,
    link: "/use-cases/marketing-analytics",
  },
  {
    category: "Customer Profitability",
    heading: "Improving Customer Profitability",
    description:
      "Improve customer profitability with Akila Analytics. Analyze customer behavior, identify profitable segments, and develop product and service offerings that meet their needs.",
    img: UseCaseCustomerProfitability,
    link: "/use-cases/customer-profitability",
  },
];

export const gettingStartedButtons = [
  {
    text: "Request a Demo",
    path: "/product/watch-demo",
    background: true,
  },
  {
    text: "Register",
    path: "/contact-us",
    background: false,
  },
];

export const solutionsByPositionsData = [
  {
    heading: "Data Scientist",
    description:
      "Data scientists are leveraging Akila to streamline data cleaning and model building, ultimately putting the process back in the hands of the business.",
    link: "/positions/data-scientist",
    img: SolutionsByPositionsDataScientist,
  },
  {
    heading: "Business Analyst",
    description:
      "Business Analysts are leveraging Akila to connect models and applications from Data Scientist and Software Engineers into visualizations...",
    link: "/positions/business-analyst",
    img: SolutionsByPositionsBussinessAnalyst,
  },

  {
    heading: "Product Manager",
    description:
      "Product Manager at Akila identifies the customer need and the larger business objectives that a product or feature will fulfill, articulates what success looks like for a product, and rallies a team to turn that vision into a reality",
    link: "/positions/product-manager",
    img: SolutionsByPositionProductManager,
  },
];
