import React from "react";

// --- ICONS (Heroicons - for a clean, professional look) ---
const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const CloudArrowUpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
    />
  </svg>
);

const CpuChipIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v-1.5m0 15v1.5m3.75-18v1.5m0 15v-1.5M5.25 12h-1.5m15 0h-1.5m-15-3.75h-1.5m15 0h-1.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 3.75H9A2.25 2.25 0 006.75 6v12A2.25 2.25 0 009 20.25h6A2.25 2.25 0 0017.25 18V6A2.25 2.25 0 0015 3.75z"
    />
  </svg>
);

const ArrowDownTrayIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
    />
  </svg>
);

// --- Header Component ---
const Header = () => (
  <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-white tracking-wider">
            AKILA // FINE-TUNE
          </span>
        </div>
        <div className="flex items-center">
          <a
            href="#contact"
            className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  </header>
);

// --- Hero Section ---
const Hero = () => (
  <div className="relative bg-gray-900 pt-16 sm:pt-24 lg:pt-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Turn Your Private Data Into a Competitive Advantage
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
        Securely fine-tune powerful open-source language models on your
        proprietary datasets. Create custom AI assistants, automate workflows,
        and unlock insights-all while your data remains yours, guaranteed.
      </p>
      <div className="mt-10">
        <a
          href="#how-it-works"
          className="rounded-md bg-white px-8 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-200"
        >
          Learn How It Works
        </a>
      </div>
    </div>
    <div className="mt-12 h-64 bg-gradient-to-t from-gray-900 to-transparent" />
  </div>
);

// --- How It Works Section ---
const HowItWorks = () => (
  <section id="how-it-works" className="bg-gray-900 py-16 sm:py-24 -mt-64">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Secure, Asynchronous, Reliable.
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Our architecture is designed from the ground up to protect your data
          and deliver results.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-y-12 md:grid-cols-3 md:gap-x-8">
        {/* Step 1: Secure Upload */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 ring-8 ring-indigo-500/10">
            <CloudArrowUpIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">
            1. Secure Upload
          </h3>
          <p className="mt-2 text-gray-400">
            Upload your dataset and config files directly to a private,
            encrypted S3 bucket. Your data never passes through our servers.
          </p>
        </div>

        <div className="hidden md:block text-gray-600 self-center">
          <ArrowRightIcon className="w-16 h-16 mx-auto" />
        </div>

        {/* Step 2: Asynchronous Processing */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 ring-8 ring-indigo-500/10">
            <CpuChipIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">
            2. Private Fine-Tuning
          </h3>
          <p className="mt-2 text-gray-400">
            Our isolated worker pulls the job from a secure queue, processes
            your data on our dedicated 3090 GPU, and begins fine-tuning.
          </p>
        </div>

        <div className="hidden md:block text-gray-600 self-center">
          <ArrowRightIcon className="w-16 h-16 mx-auto" />
        </div>

        {/* Step 3: Download Results */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 ring-8 ring-indigo-500/10">
            <ArrowDownTrayIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">
            3. Retrieve Your Model
          </h3>
          <p className="mt-2 text-gray-400">
            Once complete, your fine-tuned model adapters are uploaded to S3.
            You are notified and given a secure link to download your results.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Use Cases Section ---
const UseCases = () => {
  const cases = [
    {
      name: "Custom Chatbots",
      description:
        "Build internal helpdesks or customer service bots that understand your company's unique terminology and processes.",
    },
    {
      name: "Document Analysis",
      description:
        "Fine-tune models to accurately summarize legal documents, financial reports, or technical papers.",
    },
    {
      name: "Content Generation",
      description:
        "Create marketing copy, product descriptions, or emails in your brand's specific tone and style.",
    },
    {
      name: "Code Assistants",
      description:
        "Train a model on your private codebase to help developers understand complex logic and write new functions.",
    },
  ];
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unlock New Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A model trained on your data is a model that works for your
            business.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div key={c.name} className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-lg font-medium text-gray-900">{c.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Security Section ---
const SecurityFirst = () => (
  <section className="bg-gray-50 py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-lg bg-gray-900 px-6 py-12 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white">
            <ShieldCheckIcon
              className="h-7 w-7 text-indigo-600"
              aria-hidden="true"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Data Sovereignty is Our Priority
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We built our system on the principle that you should never have to
            compromise on data privacy. Our worker nodes are isolated and only
            make outbound connections to AWS, meaning your data is never exposed
            to the public internet. After each job, all local data is
            permanently deleted.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- CTA Section ---
const CallToAction = () => (
  <section id="contact" className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Ready to build your custom AI?
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Let's discuss your project. We can help you prepare your dataset,
        configure your training run, and deploy your fine-tuned model.
      </p>
      <div className="mt-10">
        <a
          href="mailto:contact@akila.ai"
          className="rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Contact Us to Get Started
        </a>
      </div>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-gray-900">
    <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
      <p className="text-center text-xs leading-5 text-gray-400">
        &copy; {new Date().getFullYear()} Akila Analytics, Inc. All rights
        reserved.
      </p>
    </div>
  </footer>
);

// --- Main App Component ---
export default function Rag() {
  return (
    <div className="bg-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <UseCases />
        <SecurityFirst />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
