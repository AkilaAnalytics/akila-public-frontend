import { useState, useEffect } from "react";
import { hamburgerMenu } from "~/view/assets/icons";
import { CheckMarkIcon, PricingCard } from "../components";
import { steps, features, proPlanFeatures } from "./text";
import { Link, useNavigate } from "react-router";
import { logoBlackFont } from "~/view/assets";
import { useAppContext } from "~/view/context";
import { LandingPageNavbar } from "~/view/components";

const link = "https://app.akilaanalytics.com/checkout?product=auto-invoice";
export default function LandingPage() {
  const { openChat, toggleCalendly } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    const { protocol, hostname, port } = window.location;

    // Remove the specific subdomain (or any subdomain before .yourdomain.com)
    const domainParts = hostname.split(".");
    const filteredParts = domainParts.filter((part) => part !== "auto-invoice");
    const newHost = filteredParts.join(".");

    // Reconstruct the base URL (with port if needed)
    const origin = `${protocol}//${newHost}${port ? `:${port}` : ""}`;

    // If we're still on the same top-level origin, use SPA navigation
    if (newHost === window.location.hostname) {
      navigate(link);
    } else {
      // Otherwise, do a full browser redirect
      window.location.href = link;
    }
  };

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
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
              🚀 Automate Your Invoice Generation
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
              Turn Your Data Into
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Professional Invoices
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
              Upload your CSV files and generate hundreds of professional,
              branded invoices in seconds. No more manual work, no more errors,
              just perfect invoices every time.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleGetStartedClick}
                className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                Start Free Trial
              </button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-500" />

                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="relative mt-16">
            <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-2xl">
              <div className="mb-6 flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-gray-500">
                  AutoInvoice Dashboard
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-8 text-center">
                <div className="mb-4 text-6xl">📄</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Upload CSV → Get Professional Invoices
                </h3>
                <p className="text-gray-600">
                  Transform your data into beautiful, branded invoices instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Everything you need to automate invoicing
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Powerful features designed to save you time and eliminate manual
              invoice creation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How AutoInvoice Works
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Three simple steps to transform your data into professional
              invoices
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">10,000+</div>
              <div className="text-blue-100">Invoices Generated</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">500+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">Support</div>
              <div className="text-purple-100">
                Customer support from human engineers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Simple, transparent pricing
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <PricingCard
              title="Pro"
              price="29"
              features={proPlanFeatures}
              handleGetStartedClick={handleGetStartedClick}
              showGreenChecks={true}
              buttonText="Start free trial"
            />
            <div className="my-auto md:ml-5">
              <h4 className="text-gray-800">
                Chat with us for a custom solution.
              </h4>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to automate your invoicing?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Join thousands of businesses saving time and money with AutoInvoice
          </p>
          <button
            onClick={handleGetStartedClick}
            className="transform cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            Start Your Free Trial
          </button>
          <p className="mt-4 text-gray-400">
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <span className="text-sm font-bold text-white">AI</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  AutoInvoice
                </span>
              </div>
              <p className="mb-4 text-gray-600">
                Automate your invoice generation and save hours of manual work.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://AkilaAnalytics.com/resources/insights"
                    target="_blank"
                    className="hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8  text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} AutoInvoice. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
