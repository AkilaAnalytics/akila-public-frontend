import { useState, useEffect } from "react";
import { useAppContext } from "~/view/context";
import { Link } from "react-router";
import { logoBlackFont } from "~/view/assets";
import { LandingPageNavbar } from "~/view/components";

export default function PrivateFineTuning() {
  const { openChat, toggleCalendly } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactUsClick = () => {
    window.location.href =
      "mailto:hello@akilaanalytics.com?subject=Private LLM Fine-Tuning Inquiry";
  };

  const features = [
    {
      icon: "🔒",
      title: "Complete Data Privacy",
      description: "Private fine-tuning with full data isolation.",
    },
    {
      icon: "🛡️",
      title: "Secure Model Training",
      description:
        "End-to-end encrypted training pipelines ensure your proprietary data stays confidential.",
    },
    {
      icon: "⚡",
      title: "High-Performance GPUs",
      description:
        "State-of-the-art NVIDIA H100s and A100s for lightning-fast private model training.",
    },
    {
      icon: "🎯",
      title: "Custom Private Models",
      description:
        "Create domain-specific LLMs trained exclusively on your data without privacy compromises.",
    },
    {
      icon: "📊",
      title: "Private Monitoring",
      description:
        "Real-time training metrics and performance analytics in your dedicated environment.",
    },
    {
      icon: "🏢",
      title: "Enterprise Privacy",
      description:
        "Dedicated infrastructure for enterprise customers requiring maximum data protection.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Secure Data Upload",
      description: "Upload data to an encrypted environment.",
    },
    {
      step: "02",
      title: "Private Training",
      description:
        "Your model trains in complete isolation with dedicated GPUs and secure pipelines.",
    },
    {
      step: "03",
      title: "Secure Delivery",
      description:
        "Receive your fine-tuned model through secure channels with full ownership rights.",
    },
  ];

  const useCases = [
    {
      title: "Proprietary Business Data",
      description:
        "Fine-tune models on confidential business documents, customer data, and internal knowledge bases.",
      icon: "🏢",
    },
    {
      title: "Financial & Legal Documents",
      description:
        "Train models on sensitive financial reports, legal contracts, and compliance documents.",
      icon: "📋",
    },
    {
      title: "Medical & Healthcare Data",
      description:
        "Create specialized models for healthcare applications while maintaining patient privacy.",
      icon: "🏥",
    },
    {
      title: "Intellectual Property",
      description:
        "Protect your trade secrets and IP while creating powerful domain-specific AI models.",
      icon: "💡",
    },
  ];

  const CheckMarkIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      <LandingPageNavbar
        navLinks={[
          { href: "#features", label: "Features" },
          { href: "#how-it-works", label: "How it Works" },
          { href: "#use-cases", label: "Use Cases" },
          { href: "#pricing", label: "Pricing" },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
              🔒 Private & Secure LLM Fine-Tuning
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
              Run LLMs
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Privately & Securely
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
              Train custom language models with complete privacy.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={toggleCalendly}
                className="transform cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl"
              >
                Schedule call
              </button>
              <button
                onClick={openChat}
                className="cursor-pointer rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400"
              >
                Chat
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-500" />
                <span>100% Data Privacy</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-500" />
                <span>Secure Infrastructure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-500" />
                <span>Full Model Ownership</span>
              </div>
            </div>
          </div>

          {/* Hero Demo */}
          <div className="relative mt-16">
            <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-2xl">
              <div className="mb-6 flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-gray-500">
                  Secure Training Environment
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-8 text-center">
                <div className="mb-4 text-6xl">🔐</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Private Data → Secure Training → Custom Model
                </h3>
                <p className="text-gray-600">
                  Your sensitive data stays protected throughout the entire
                  training process
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                  <div className="rounded-lg bg-white p-3">
                    <div className="font-semibold text-purple-600">
                      🔒 Encrypted
                    </div>
                    <div className="text-gray-500">End-to-end security</div>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <div className="font-semibold text-purple-600">
                      🛡️ Isolated
                    </div>
                    <div className="text-gray-500">Dedicated environment</div>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <div className="font-semibold text-purple-600">
                      👤 Private
                    </div>
                    <div className="text-gray-500">Your data only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Privacy Benefits Section */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Privacy Matters in LLM Fine-Tuning
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Traditional fine-tuning services expose your sensitive data to
              security risks.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Traditional Fine-Tuning Risks
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Data mixed with other customers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Potential data leaks and breaches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>No control over data handling</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Shared infrastructure vulnerabilities</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Akila's Private Approach
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Dedicated isolated environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>End-to-end encryption protocols</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Complete data control and ownership</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Private infrastructure with no sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Private LLM fine-tuning with enterprise security
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Advanced privacy features designed for businesses that can't
              compromise on data security
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-purple-300 hover:shadow-lg"
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
      {/* Use Cases Section */}
      <section id="use-cases" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Perfect for Sensitive Data Training
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Industries and use cases that require maximum data privacy
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-8 transition-all duration-200 hover:border-purple-300 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{useCase.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How it Works Section */}
      <section
        id="how-it-works"
        className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How Private Fine-Tuning Works
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Three steps to secure, private model training
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-xl font-bold text-white">
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Trusted by privacy-conscious organizations
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">100%</div>
              <div className="text-purple-100">Data Privacy Guaranteed</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">Zero</div>
              <div className="text-purple-100">Data Breaches</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">Full Control</div>
              <div className="text-purple-100">Zero Dependencies</div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Private fine-tuning pricing
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Custom pricing for your private training requirements and security
              needs
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <div className="rounded-xl border-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white p-8 shadow-lg">
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Private Training Environment
                </h3>
                <div className="mb-6 text-4xl font-bold text-purple-600">
                  Custom Quote
                </div>

                <div className="mb-8 space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Dedicated isolated infrastructure
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      End-to-end encryption protocols
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Private ML engineering support
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Secure model delivery & ownership
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Data deletion guarantees
                    </span>
                  </div>
                </div>

                <button
                  onClick={toggleCalendly}
                  className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-lg font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-indigo-700"
                >
                  Schedule call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to train LLMs with complete privacy?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Join organizations that prioritize data security in their AI
            initiatives
          </p>
          <button
            onClick={handleContactUsClick}
            className="transform cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl"
          >
            Request Private Consultation
          </button>
          <p className="mt-4 text-gray-400">
            Confidential discussion • Custom security requirements • Private
            quote
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <Link to="/">
                  <img
                    src={logoBlackFont}
                    alt="Akila Analytics logo"
                    className="h-full w-full"
                  />
                </Link>
              </div>
              <p className="mb-4 text-gray-600">
                Private & secure LLM fine-tuning
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Private Fine-Tuning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Secure Model Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Private Infrastructure
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Security</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Security Practices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Data Protection
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="mailto:hello@akilaanalytics.com"
                    className="hover:text-gray-900"
                  >
                    Private Inquiries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Security Questions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Akila Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
