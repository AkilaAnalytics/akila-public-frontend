import { useState, useEffect } from "react";
import { CheckMarkIcon } from "../LandingPages/AutoInvoice/components";

export default function PrivateLLM() {
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
      "mailto:hello@akilaanalytics.com?subject=Private LLM Hardware Inquiry";
  };

  const features = [
    {
      icon: "🔒",
      title: "Complete Data Privacy",
      description:
        "Your data never leaves your premises. Open-source LLMs run entirely on your custom hardware infrastructure.",
    },
    {
      icon: "💰",
      title: "Massive Cost Savings",
      description:
        "Reduce cloud API costs by 60-80% by migrating to custom hardware that pays for itself in months.",
    },
    {
      icon: "🏢",
      title: "Enterprise-Grade Security",
      description:
        "Meet compliance requirements with on-premises deployment. Perfect for healthcare, finance, and government.",
    },
    {
      icon: "⚡",
      title: "High Performance Hardware",
      description:
        "Beautiful custom servers using premium cases like Fractal North XL with optimized GPU configurations.",
    },
    {
      icon: "🛠️",
      title: "Plug & Play Setup",
      description:
        "Pre-configured with Akila platform and popular open-source models like Llama, Mistral, and Code Llama.",
    },
    {
      icon: "🔧",
      title: "Full Customization",
      description:
        "Tailored hardware specs, model selection, and integration with your existing workflows and systems.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Assess Your Needs",
      description:
        "We analyze your current LLM usage, costs, and privacy requirements to design the perfect solution.",
    },
    {
      step: "02",
      title: "Custom Hardware Build",
      description:
        "Build and configure your private LLM server with premium components and optimized performance.",
    },
    {
      step: "03",
      title: "Deploy & Train",
      description:
        "Install at your location, configure your preferred models, and train your team for seamless operation.",
    },
  ];

  const benefits = [
    {
      title: "Data Never Leaves Your Building",
      description:
        "Unlike cloud-based LLMs, your sensitive data stays completely within your infrastructure.",
      icon: "🏠",
    },
    {
      title: "No Per-Token Costs",
      description:
        "Eliminate expensive API fees. Use your LLM as much as you want without worrying about usage costs.",
      icon: "💸",
    },
    {
      title: "Customizable Models",
      description:
        "Fine-tune open-source models on your specific data and use cases for superior performance.",
      icon: "🎯",
    },
    {
      title: "24/7 Availability",
      description:
        "No internet required. Your private LLM works even during outages or network issues.",
      icon: "🌐",
    },
  ];

  const comparisons = [
    {
      feature: "Data Privacy",
      public: "❌ Data sent to external servers",
      private: "✅ Data stays on your premises",
    },
    {
      feature: "Cost Structure",
      public: "❌ Pay per API call/token",
      private: "✅ Fixed hardware cost only",
    },
    {
      feature: "Customization",
      public: "❌ Limited to provider's models",
      private: "✅ Full model customization",
    },
    {
      feature: "Compliance",
      public: "❌ External data processing",
      private: "✅ Meets all compliance standards",
    },
    {
      feature: "Performance",
      public: "❌ Network latency dependent",
      private: "✅ Optimized local performance",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-background to-gray-900 px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-900/30 border border-blue-800 px-4 py-2 text-sm font-medium text-blue-300">
              🔒 Private LLM Solutions
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              Deploy Your Own
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Private LLM
              </span>{" "}
              On-Premises
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300">
              Stop paying expensive API fees and sending your data to external
              servers. Get your own private LLM with custom hardware that
              reduces costs by 60-80% while keeping your data completely secure.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleGetStartedClick}
                className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                Get Your Private LLM
              </button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition-all duration-200 hover:border-gray-400 hover:text-white">
                Calculate Savings
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>100% Private & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>No API Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>Custom Hardware</span>
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
                  Private LLM Server Dashboard
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-8 text-center">
                <div className="mb-4 text-6xl">🖥️</div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Your Data + Your Hardware + Your Control
                </h3>
                <p className="text-gray-300">
                  Premium custom servers with open-source LLMs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Private LLM Section */}
      <section className="bg-gray-900/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              What is a Private LLM?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              A private LLM is a large language model that runs entirely on your
              own hardware infrastructure, giving you complete control over your
              data, costs, and AI capabilities.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Public LLMs (ChatGPT, Claude, etc.)
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Your data is sent to external servers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Expensive per-token API fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>No control over model updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">❌</span>
                  <span>Compliance and privacy concerns</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-800 bg-blue-900/20 p-8">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Private LLMs (Your Hardware)
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>Data never leaves your premises</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>No ongoing API costs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>Full customization and control</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">✅</span>
                  <span>Meets all compliance standards</span>
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
              Why Choose Akila's Private LLM Hardware?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Premium custom servers designed specifically for private LLM
              deployment
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

      {/* Comparison Table */}
      <section className="bg-gray-900/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Private LLM vs Public LLM Comparison
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              See why private LLMs are the superior choice for businesses
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
                    Public LLMs
                  </th>
                  <th className="px-6 py-4 text-left text-blue-400 font-semibold">
                    Private LLMs
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
                    <td className="px-6 py-4 text-gray-300">{item.public}</td>
                    <td className="px-6 py-4 text-gray-300">{item.private}</td>
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
        className="bg-background px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              How We Deploy Your Private LLM
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Simple three-step process to get your private LLM running
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

      {/* Benefits Section */}
      <section className="bg-gray-900/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Key Benefits of Private LLM Deployment
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Why businesses are switching to private LLM infrastructure
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-200 hover:border-blue-600 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{benefit.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Private LLM Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">60-80%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">100%</div>
              <div className="text-blue-100">Data Privacy</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">0</div>
              <div className="text-purple-100">API Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Deploy Your Private LLM?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Stop paying expensive API fees and start protecting your data with
            your own private LLM infrastructure
          </p>
          <button
            onClick={handleGetStartedClick}
            className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            Get Your Private LLM Quote
          </button>
          <p className="mt-4 text-gray-400">
            Free consultation • Custom hardware • Complete setup
          </p>
        </div>
      </section>
    </div>
  );
}
