import { useState, useEffect } from "react";
import { CheckMarkIcon } from "../LandingPages/AutoInvoice/components";

export default function AIConsulting() {
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
      "mailto:hello@akilaanalytics.com?subject=AI Consulting Inquiry";
  };

  const features = [
    {
      icon: "🚀",
      title: "End-to-End AI Platform",
      description:
        "Comprehensive no-code solution that's easier to use and more affordable than DataRobot or Dataiku.",
    },
    {
      icon: "🔧",
      title: "Custom AI Hardware",
      description:
        "Beautiful, secure servers that reduce cloud costs and keep your data private with open-source models.",
    },
    {
      icon: "💡",
      title: "Strategic AI Consulting",
      description:
        "Bespoke solutions tailored to your exact needs, combining platform and hardware expertise.",
    },
    {
      icon: "🏢",
      title: "Enterprise-Grade Security",
      description:
        "On-premises deployment with open-source LLMs means your data never leaves your environment.",
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description:
        "Reduce cloud spending by migrating non-critical workflows to custom hardware solutions.",
    },
    {
      icon: "⚡",
      title: "Rapid Implementation",
      description:
        "Get up and running faster with our integrated platform, hardware, and consulting approach.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We analyze your current processes and identify AI opportunities tailored to your business.",
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description:
        "Design integrated solutions using our platform, hardware, and consulting expertise.",
    },
    {
      step: "03",
      title: "Implementation & Training",
      description:
        "Deploy your AI solution and train your team for long-term success.",
    },
  ];

  const services = [
    {
      title: "AI Strategy & Planning",
      description:
        "Develop comprehensive AI roadmaps aligned with your business objectives.",
      icon: "🎯",
    },
    {
      title: "Platform Implementation",
      description:
        "Deploy our end-to-end AI platform with custom integrations for your workflow.",
      icon: "🔧",
    },
    {
      title: "Hardware Solutions",
      description:
        "Custom AI servers that reduce costs while maintaining enterprise security.",
      icon: "💻",
    },
    {
      title: "Training & Support",
      description:
        "Comprehensive training programs and ongoing support for your AI initiatives.",
      icon: "🎓",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-background to-gray-900 px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-900/30 border border-blue-800 px-4 py-2 text-sm font-medium text-blue-300">
              🚀 AI Consulting Services
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              Transform Your Business With
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Complete AI Solutions
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300">
              We're not just another AI consulting company. We provide
              end-to-end solutions combining our no-code platform, custom
              hardware, and expert consulting to deliver measurable results.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleGetStartedClick}
                className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                Schedule Consultation
              </button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition-all duration-200 hover:border-gray-400 hover:text-white">
                View Case Studies
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-400" />
                <span>Proven results</span>
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
                  AI Consulting Dashboard
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-8 text-center">
                <div className="mb-4 text-6xl">🤖</div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Platform + Hardware + Consulting = Success
                </h3>
                <p className="text-gray-300">
                  Complete AI transformation with integrated solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="services"
        className="bg-background px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Complete AI solutions for your business
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Unlike other consulting firms, we provide the full stack:
              platform, hardware, and expertise
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

      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="bg-gray-900/30 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              How We Transform Your Business
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Our proven three-step process delivers results from day one
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

      {/* Solutions Section */}
      <section
        id="solutions"
        className="bg-background px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Our AI Consulting Services
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Comprehensive services that cover every aspect of your AI journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-200 hover:border-blue-600 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Trusted by forward-thinking businesses
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">50+</div>
              <div className="text-blue-100">AI Projects Delivered</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">$2M+</div>
              <div className="text-blue-100">Cost Savings Generated</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">50% - 100%</div>
              <div className="text-purple-100">Effort Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to transform your business with AI?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Schedule a free consultation and discover how our integrated AI
            solutions can drive your success
          </p>
          <button
            onClick={handleGetStartedClick}
            className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            Schedule Your Consultation
          </button>
          <p className="mt-4 text-gray-400">
            Free consultation • Custom solutions • Proven results
          </p>
        </div>
      </section>
    </div>
  );
}
