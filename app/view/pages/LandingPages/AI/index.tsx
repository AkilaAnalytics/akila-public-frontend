import { useState, useEffect } from "react";
import { CheckMarkIcon } from "../AutoInvoice/components";
import { LandingPageNavbar } from "~/view/components";
import { logoBlackFont } from "~/view/assets";
import { useAppContext } from "~/view/context";
import CustomSelect from "./Dropdown";
import { useFetcher } from "react-router";

const employeeOptions = [
  { value: "10-50", label: "10-50 employees" },
  { value: "50-100", label: "50-100 employees" },
  { value: "100-250", label: "100-250 employees" },
  { value: "250+", label: "250+ employees" },
];

const useCase = [
  { value: "data-analysis", label: "Better data analysis & insights" },
  { value: "process-automation", label: "Automate repetitive tasks" },
  { value: "cost-optimization", label: "Reduce operational costs" },
  { value: "ai-implementation", label: "Implement AI workflows" },
  { value: "competitive-edge", label: "Stay ahead of competition" },
];

export default function AI() {
  const { toggleCalendly } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    employees: "",
    useCase: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetcher = useFetcher();

  const handleFormSubmit = () => {
    fetcher.submit({ formData });

    // Simple success message
    alert("Thanks! We'll be in touch within 24 hours to schedule a demo.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      employees: "",
      useCase: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const features = [
    {
      icon: "🚀",
      title: "No-Code AI Workflows",
      description:
        "Build and deploy AI automations without writing code. Drag, drop, and connect data sources in minutes.",
    },
    {
      icon: "🔒",
      title: "Private & Secure",
      description:
        "Keep your data on-premises or in your private cloud. Full control, zero vendor lock-in.",
    },
    {
      icon: "🔧",
      title: "Custom Integrations",
      description:
        "Connect to your existing tools and databases. We build custom connectors for your specific needs.",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description:
        "Monitor performance, track improvements, and get insights from all your automated processes.",
    },
  ];

  const useCases = [
    {
      title: "Document Processing",
      description:
        "Automatically extract, categorize, and process documents from emails, uploads, or scanned files.",
      tags: ["OCR", "Classification", "Data Extraction"],
    },
    {
      title: "Predictive Analytics",
      description:
        "Forecast demand, identify trends, and make data-driven decisions with custom ML models.",
      tags: ["Forecasting", "Trend Analysis", "Risk Assessment"],
    },
    {
      title: "Process Automation",
      description:
        "Automate repetitive workflows like invoicing, reporting, and customer onboarding.",
      tags: ["Workflow", "Integration", "Scheduling"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <LandingPageNavbar
        navLinks={[
          { href: "#features", label: "Features" },
          { href: "#use-cases", label: "Use Cases" },
          { href: "#demo", label: "Request Demo" },
        ]}
      />

      {/* Hero Section */}
      <section className="px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-sm font-medium text-blue-700">
                🆕 Now supporting private cloud deployments
              </span>
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl lg:text-7xl max-w-4xl mx-auto">
              Build AI workflows
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                without code
              </span>
            </h1>

            <p className="mb-8 text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Design, deploy, and manage AI automations for your business. No
              technical expertise required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={toggleCalendly}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Demo
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
                View Examples
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Trusted by 50+ companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>SOC 2 compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              Everything you need to automate with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple data processing to complex decision workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              Built for real business problems
            </h2>
            <p className="text-xl text-gray-600">
              See how teams use Akila to automate their workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section id="demo" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
                See Akila in action
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Get a personalized demo showing how AI can work for your
                specific use case.
              </p>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3">
                  <CheckMarkIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>30-minute personalized walkthrough</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckMarkIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Custom workflow examples for your industry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckMarkIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Implementation timeline and pricing</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Request a Demo
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <CustomSelect
                  options={employeeOptions}
                  value={formData.employees}
                  onChange={handleInputChange}
                  placeholder="Company Size"
                  name="employees"
                />

                <CustomSelect
                  options={useCase}
                  value={formData.useCase}
                  onChange={handleInputChange}
                  placeholder="Primary Use Case"
                  name="useCase"
                />

                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Demo
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We'll follow up within 24 hours to schedule your demo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Ready to automate your workflows?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join teams already building with Akila
          </p>

          <button
            onClick={toggleCalendly}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src={logoBlackFont} alt="Akila Analytics" className="h-6" />
            </div>
            <p className="text-gray-500 text-sm">
              AI automation platform for modern businesses
            </p>
            <p className="text-xs text-gray-400 mt-4">
              &copy; {new Date().getFullYear()} Akila Analytics. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
