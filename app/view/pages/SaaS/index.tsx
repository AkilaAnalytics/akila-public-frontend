import { useState, useEffect } from "react";
import { CheckMarkIcon } from "../LandingPages/AutoInvoice/components";

export default function SaaS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    window.location.href =
      "https://app.akilaanalytics.com/checkout?product=reporting-automation";
  };

  const features = [
    {
      icon: "📊",
      title: "Financial Reporting Automation",
      description:
        "Automatically generate financial reports, dashboards, and analytics from your accounting systems and databases.",
    },
    {
      icon: "📈",
      title: "Marketing Performance Reporting",
      description:
        "Track campaign performance, ROI, and attribution across all channels with automated marketing reports.",
    },
    {
      icon: "🚀",
      title: "No-Code Simplicity",
      description:
        "Create complex reports and automations without coding. Drag-and-drop interface that anyone can use.",
    },
    {
      icon: "💰",
      title: "90% Cheaper Than Competitors",
      description:
        "Get enterprise-grade reporting automation at a fraction of the cost of DataRobot, Dataiku, or custom solutions.",
    },
    {
      icon: "🔗",
      title: "Data Connectors",
      description:
        "Connect to any data source: QuickBooks, Salesforce, Google Analytics, databases, APIs, and more.",
    },
    {
      icon: "⚡",
      title: "Real-Time Automation",
      description:
        "Set up automated workflows that trigger reports, alerts, and actions based on your data changes.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Connect Your Data",
      description:
        "Use our data connections to link your financial systems, marketing platforms, and databases.",
    },
    {
      step: "02",
      title: "Build Reports Visually",
      description:
        "Drag and drop to create professional reports, dashboards, and automated workflows without coding.",
    },
    {
      step: "03",
      title: "Automate Everything",
      description:
        "Schedule reports, set up alerts, and trigger actions based on your data automatically.",
    },
  ];

  const useCases = [
    {
      title: "Financial Reporting Automation",
      description:
        "Automatically generate P&L statements, cash flow reports, and financial dashboards from your accounting data.",
      icon: "💼",
      benefits: [
        "Monthly financial reports generated automatically",
        "Real-time budget vs actual tracking",
        "Automated variance analysis and alerts",
        "Board-ready financial presentations",
      ],
    },
    {
      title: "Marketing Performance Reporting",
      description:
        "Track campaign performance, attribution, and ROI across all marketing channels with automated reports.",
      icon: "📊",
      benefits: [
        "Cross-channel marketing attribution",
        "Automated campaign performance reports",
        "Real-time ROI tracking and optimization",
        "Executive marketing dashboards",
      ],
    },
    {
      title: "Sales & Revenue Analytics",
      description:
        "Monitor sales performance, pipeline health, and revenue forecasting with automated reporting.",
      icon: "💹",
      benefits: [
        "Automated sales pipeline reports",
        "Revenue forecasting and trending",
        "Team performance tracking",
        "Customer lifecycle analytics",
      ],
    },
    {
      title: "Operational Reporting",
      description:
        "Streamline operational reporting across departments with automated data collection and analysis.",
      icon: "⚙️",
      benefits: [
        "Automated operational dashboards",
        "KPI tracking and monitoring",
        "Process efficiency reporting",
        "Resource utilization analytics",
      ],
    },
  ];

  const comparisons = [
    {
      feature: "Ease of Use",
      competitors: "❌ Requires data scientists",
      akila: "✅ No-code drag & drop",
    },
    {
      feature: "Setup Time",
      competitors: "❌ Months of implementation",
      akila: "✅ Hours to get started",
    },
    {
      feature: "Cost",
      competitors: "❌ $50K+ annually",
      akila: "✅ Starting at $100 per user / month",
    },
    {
      feature: "Support",
      competitors: "❌ Enterprise support only",
      akila: "✅ Human support for all users",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-background to-gray-900 px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-900/30 border border-blue-800 px-4 py-2 text-sm font-medium text-blue-300">
              📊 Automated Reporting Platform
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              Automate Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Financial & Marketing
              </span>{" "}
              Reporting
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300">
              Stop spending hours on manual reports. Our no-code platform
              automates financial reporting, marketing performance tracking, and
              data analytics at 90% less cost than DataRobot or Dataiku.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleGetStartedClick}
                className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                Start Free Trial
              </button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition-all duration-200 hover:border-gray-400 hover:text-white">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="relative mt-16">
            <div className="mx-auto max-w-4xl rounded-xl bg-gray-900/50 border border-gray-800 p-8 shadow-2xl">
              <div className="mb-6 flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-gray-400">
                  Akila Analytics Dashboard
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-8 text-center">
                <div className="mb-4 text-6xl">📊</div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  No-Code Reporting Automation
                </h3>
                <p className="text-gray-300">
                  Create professional reports and dashboards without coding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-900/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Manual Reporting Is Killing Your Productivity
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Finance teams waste 40+ hours monthly on manual reporting.
              Marketing teams can't track ROI across channels. Traditional
              solutions are too expensive and complex.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Traditional Reporting Problems
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Hours spent on manual data entry and formatting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Expensive tools like DataRobot ($50K+ annually)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Complex setup requiring data scientists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Delayed insights due to manual processes</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-800 bg-blue-900/20 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Akila's Automated Solution
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>Automated report generation in minutes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>90% cheaper than enterprise alternatives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>No-code platform anyone can use</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>Real-time insights and automated alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-background px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Everything You Need for Automated Reporting
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              End-to-end data analytics, reporting, and automation in one
              easy-to-use platform
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-200 hover:border-blue-600 hover:shadow-lg"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gray-900/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Automated Reporting Use Cases
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              See how businesses are saving 40+ hours monthly with automated
              reporting
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-200 hover:border-blue-600 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{useCase.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-sm text-gray-400"
                    >
                      <CheckMarkIcon className="h-4 w-4 text-blue-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Why Choose Akila Over DataRobot & Dataiku?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              See why thousands of businesses choose Akila for automated
              reporting
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full rounded-xl border border-gray-800 bg-gray-900/50">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-red-400 font-semibold">
                    DataRobot/Dataiku
                  </th>
                  <th className="px-6 py-4 text-left text-blue-400 font-semibold">
                    Akila Analytics
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 last:border-b-0"
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {item.competitors}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{item.akila}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="bg-gray-900/30 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              How Akila Automates Your Reporting
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Get started with automated reporting in just three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Results That Speak for Themselves
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">40+</div>
              <div className="text-blue-100">Hours Saved Monthly</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">90%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">
                Customized to your needs
              </div>
              <div className="text-purple-100">Bespoke solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Automate Your Reporting?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Join thousands of businesses saving 40+ hours monthly with automated
            financial and marketing reporting
          </p>
          <button
            onClick={handleGetStartedClick}
            className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            Start Your Free Trial
          </button>
          <p className="mt-4 text-gray-400">
            14-day free trial • No credit card required • Setup in minutes
          </p>
        </div>
      </section>
    </div>
  );
}
