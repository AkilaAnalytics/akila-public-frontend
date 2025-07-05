import { useState, useEffect } from 'react';

export default function FineTuning() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactUsClick = () => {
    window.location.href =
      'mailto:hello@akilaanalytics.com?subject=LLM Fine-Tuning Inquiry';
  };

  const features = [
    {
      icon: '🚀',
      title: 'High-Performance GPUs',
      description:
        'State-of-the-art NVIDIA H100s and A100s for lightning-fast training speeds.',
    },
    {
      icon: '🎯',
      title: 'Custom Fine-Tuning',
      description:
        'Tailor any open-source model to your specific use case and domain.',
    },
    {
      icon: '📊',
      title: 'Advanced Monitoring',
      description:
        'Real-time training metrics, loss curves, and performance analytics.',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description:
        'Your data never leaves our secure infrastructure. Full data privacy guaranteed.',
    },
    {
      icon: '⚡',
      title: 'Optimized Infrastructure',
      description:
        'Custom-built training pipelines optimized for maximum efficiency and cost savings.',
    },
    {
      icon: '🛠️',
      title: 'Expert Support',
      description:
        'ML engineers available to help optimize your training process.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Upload Your Dataset',
      description:
        'Securely upload your training data and specify your requirements.',
    },
    {
      step: '02',
      title: 'Configure Training',
      description:
        'Choose your base model, hyperparameters, and training objectives.',
    },
    {
      step: '03',
      title: 'Deploy & Monitor',
      description:
        'Track training progress and deploy your fine-tuned model when ready.',
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
      {/* Navigation */}
      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600">
                <span className="text-sm font-bold text-white">AF</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Akila FineTune
              </span>
            </div>

            <div className="hidden items-center space-x-8 md:flex">
              <a
                href="#features"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Pricing
              </a>
              <button
                onClick={handleContactUsClick}
                className="cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 text-white transition-all duration-200 hover:from-purple-700 hover:to-indigo-700"
              >
                Contact Us
              </button>
            </div>

            <button
              className="cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
              🤖 Professional LLM Fine-Tuning Service
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
              Fine-Tune LLMs with
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}
                Enterprise-Grade GPUs
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
              Leverage our high-performance GPU infrastructure to fine-tune any
              open-source language model for your specific use case. Fast,
              secure, and cost-effective AI model training.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={handleContactUsClick}
                className="transform cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl"
              >
                Get Custom Quote
              </button>
              <button className="cursor-pointer rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400">
                View Examples
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-500" />
                <span>NVIDIA H100 & A100 GPUs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckMarkIcon className="h-5 w-5 text-green-500" />
                <span>Expert ML Support</span>
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
                  Akila FineTune Dashboard
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-8 text-center">
                <div className="mb-4 text-6xl">🧠</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Upload Dataset → Fine-Tune Model → Deploy
                </h3>
                <p className="text-gray-600">
                  Turn any open-source LLM into a domain-specific AI powerhouse
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                  <div className="rounded-lg bg-white p-3">
                    <div className="font-semibold text-purple-600">
                      📊 Training
                    </div>
                    <div className="text-gray-500">Real-time metrics</div>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <div className="font-semibold text-purple-600">
                      ⚡ Speed
                    </div>
                    <div className="text-gray-500">H100 acceleration</div>
                  </div>
                  <div className="rounded-lg bg-white p-3">
                    <div className="font-semibold text-purple-600">
                      🔒 Secure
                    </div>
                    <div className="text-gray-500">Private infrastructure</div>
                  </div>
                </div>
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
              Enterprise-grade LLM fine-tuning infrastructure
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Built by ML engineers, for ML engineers. Get the performance and
              reliability your AI projects demand.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-6 transition-all duration-200 hover:border-purple-300 hover:shadow-lg"
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
      <section
        id="how-it-works"
        className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How Akila FineTune Works
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Three simple steps to get your custom LLM trained and deployed
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
            Trusted by AI teams worldwide
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">500+</div>
              <div className="text-purple-100">Models Fine-Tuned</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">50TB+</div>
              <div className="text-purple-100">Data Processed</div>
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
              Custom pricing for your needs
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Every fine-tuning project is unique. Get a personalized quote
              based on your requirements.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <div className="rounded-xl border-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white p-8 shadow-lg">
              <div className="text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Enterprise Fine-Tuning
                </h3>
                <div className="mb-6 text-4xl font-bold text-purple-600">
                  Custom Quote
                </div>

                <div className="mb-8 space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      NVIDIA H100 & A100 GPU access
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Dedicated ML engineering support
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Private, secure infrastructure
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Real-time training monitoring
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      Model optimization & deployment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckMarkIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">
                      SLA guarantees & support
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleContactUsClick}
                  className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-lg font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-indigo-700"
                >
                  Get Custom Quote
                </button>

                <p className="mt-4 text-sm text-gray-500">
                  Pricing based on model size, dataset complexity, and compute
                  requirements
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center rounded-lg bg-gray-50 px-6 py-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">
                  Typical projects start from $5,000
                </span>{' '}
                for smaller models
                <br />
                Large-scale enterprise deployments: $50,000+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to unlock the full potential of LLMs?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Join leading AI companies using our infrastructure to train
            state-of-the-art models
          </p>
          <button
            onClick={handleContactUsClick}
            className="transform cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600">
                  <span className="text-sm font-bold text-white">AF</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Akila FineTune
                </span>
              </div>
              <p className="mb-4 text-gray-600">Fine tune your LLMs</p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    LLM Fine-Tuning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Model Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    GPU Infrastructure
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@akilaanalytics.com"
                    className="hover:text-gray-900"
                  >
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
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
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
