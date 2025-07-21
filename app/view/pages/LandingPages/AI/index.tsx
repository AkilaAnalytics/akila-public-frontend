import { useState, useEffect } from "react";
import { CheckMarkIcon } from "../AutoInvoice/components";
import { LandingPageNavbar } from "~/view/components";
import { logoBlackFont } from "~/view/assets";
import { useAppContext } from "~/view/context";
import CustomSelect from "./Dropdown";
import { useFetcher } from "react-router";

const employeeOptions = [
  { value: "50-100", label: "50-100 employees" },
  { value: "100-250", label: "100-250 employees" },
  { value: "250-500", label: "250-500 employees" },
  { value: "500+", label: "500+ employees" },
];
const challengeOptions = [
  { value: "manual-processes", label: "Too many manual processes" },
  { value: "data-analysis", label: "Need better data analysis" },
  { value: "cost-reduction", label: "Want to reduce operational costs" },
  {
    value: "ai-implementation",
    label: "Want to implement AI but don't know how",
  },
  { value: "competitive-advantage", label: "Need competitive advantage" },
];

export default function AI() {
  const { toggleCalendly } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    employees: "",
    currentChallenges: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetcher = useFetcher();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetcher.submit({ formData });
    // Handle form submission here - integrate with your CRM/email system
    const formDataString = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    // In production, send to your CRM/email service
    // Example: sendToHubSpot(formData) or sendToSalesforce(formData)

    alert(
      "🎉 Success! Our AI specialist will contact you within 24 hours with your custom profit analysis."
    );

    // Reset form or redirect to thank you page
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      employees: "",
      currentChallenges: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const painPoints = [
    {
      icon: "⏰",
      title: "Manual Processes Killing Productivity",
      description:
        "Your team spends 40+ hours weekly on tasks AI could handle in minutes",
    },
    {
      icon: "💰",
      title: "Missing Revenue Opportunities",
      description:
        "Without AI insights, you're leaving 15-25% potential revenue on the table",
    },
    {
      icon: "📊",
      title: "Data Sitting Unused",
      description:
        "Your business data could predict trends and optimize operations, but it's trapped in spreadsheets",
    },
  ];

  const solutions = [
    {
      icon: "🚀",
      title: "End-to-End AI Platform",
      description:
        "No-code automation that's 90% cheaper than DataRobot. Your team builds AI workflows without developers.",
      roi: "Save 25-40 hours/week per employee",
    },
    {
      icon: "🔒",
      title: "Private AI Systems",
      description:
        "Secure, on-premises AI that reduces cloud costs by 60% while keeping your data completely private.",
      roi: "Cut AI costs by $50K-200K annually",
    },
    {
      icon: "🎯",
      title: "Custom AI Implementation",
      description:
        "We build bespoke AI solutions using our platform and hardware, tailored to your exact business needs.",
      roi: "Increase efficiency by 40-70%",
    },
    {
      icon: "📄",
      title: "Automated Business Processes",
      description:
        "From invoice generation to data reporting - automate repetitive tasks that drain your team's time.",
      roi: "Reduce manual work by 80%",
    },
  ];

  const results = [
    { metric: "Average ROI", value: "340%", timeframe: "within 6 months" },
    { metric: "Time Saved", value: "35 hrs", timeframe: "per employee/week" },
    { metric: "Cost Reduction", value: "60%", timeframe: "in AI spending" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <LandingPageNavbar
        navLinks={[
          { href: "#features", label: "Features" },
          { href: "#how-it-works", label: "How it Works" },
          { href: "#pricing", label: "Pricing" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Value Prop */}
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                ✅ Discuss AI solutions with one of our engineers.
              </div>

              <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
                Integrate AI,
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Maximize Profit
                </span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                <strong>
                  Medium-sized businesses using our AI automation see 340% ROI
                  within 6 months.
                </strong>
                Stop losing revenue to manual processes. Let us show you exactly
                how AI can transform your business.
              </p>

              {/* Key Benefits */}
              <div className="mb-8 space-y-4 text-gray-800">
                <div className="flex items-center space-x-3">
                  <CheckMarkIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">
                    <strong>Save 35+ hours per employee weekly</strong> with AI
                    automation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckMarkIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">
                    <strong>Cut AI costs by 60%</strong> with private, secure
                    systems
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckMarkIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg">
                    <strong>Increase revenue by 23%</strong> through AI-driven
                    insights
                  </span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-blue-600">100+</span>
                  <span>Companies work with us</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-blue-600">$10M+</span>
                  <span>Cost Savings Generated</span>
                </div>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Learn how AI can help drive your business
                </h3>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-4  text-gray-800"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Business Email*"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <CustomSelect
                  options={employeeOptions}
                  value={formData.employees}
                  onChange={handleInputChange}
                  placeholder="Number of Employees*"
                  name="employees"
                />
                <CustomSelect
                  options={challengeOptions}
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  placeholder="Biggest Challenge*"
                  name="currentChallenges"
                />

                <button
                  type="submit"
                  className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Set up a call
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              Is Your Business Bleeding Money on Manual Work?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Medium-sized businesses lose an average of{" "}
              <strong>$2.3M annually</strong> to inefficient processes that AI
              could automate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-periwinkleDark"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              How We Help Medium-Sized Businesses Dominate with AI
            </h2>
            <p className="text-xl text-gray-600">
              Complete AI solutions designed specifically for companies with
              50-500 employees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <div className="bg-emerald-300 rounded-lg p-3">
                  <span className="text-green-800 font-semibold">
                    💰 ROI: {solution.roi}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Real Results from Real Medium-Sized Businesses
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Here's what our clients achieve within the first 6 months
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-24">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{result.value}</div>
                <div className="text-lg font-medium text-blue-100 mb-1">
                  {result.metric}
                </div>
                <div className="text-sm text-blue-200">{result.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency CTA Section */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="font-bold text-white md:text-4xl mb-6">
            Don't lose competitive advantages while other firms are adopting
            best practices
          </h3>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <button
              onClick={toggleCalendly}
              className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
            >
              Set up a call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src={logoBlackFont}
                alt="Akila Analytics"
                className="h-5 w-50"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Driving businesses with AI automation
            </p>
            <p className="text-xs text-gray-400 mt-6">
              &copy; {new Date().getFullYear()} Akila Analytics. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
