import { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  CpuChipIcon,
  CloudIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  StarIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { fractalNorthOpen } from "~/view/assets";

export default function AkilaHomepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Akila reduced our cloud compute costs by 65% while giving us complete control over our AI models. The hardware integration was seamless.",
      author: "Sarah Chen",
      title: "CTO, TechVenture Corp",
      company: "Fortune 500 Manufacturing",
    },
    {
      quote:
        "The no-code platform let our business analysts build sophisticated models without depending on our data science team. Game-changer.",
      author: "Michael Rodriguez",
      title: "VP of Analytics, DataDriven Inc",
      company: "Financial Services",
    },
    {
      quote:
        "From consultation to deployment, Akila delivered a custom solution that perfectly fits our regulatory requirements and budget constraints.",
      author: "Jennifer Kumar",
      title: "Chief Data Officer, SecureHealth",
      company: "Healthcare Technology",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Near Black for Server Showcase */}
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="h-[90vh] absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent transform -skew-y-12 scale-150" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              {/* Hero Content */}
              <h1 className="uppercase text-gradient">
                Unlock Transformative AI
              </h1>

              <p className="mx-auto w-1/2 justify-center text-xl">
                Akila provides an integrated suite of no-code AI tools, custom
                on-premise hardware, and expert consulting.
              </p>

              <div className="mt-10 gap-5 flex flex-col md:flex-row mx-auto items-center justify-center">
                <button className="button-primary">
                  Discover Solutions
                  <ChevronRightIcon className="ml-2 w-5 h-5" />
                </button>
                <button className="button-secondary">
                  Get a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars Section */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">
              The Akila Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Our integrated approach combines cutting-edge technology with
              expert guidance to deliver complete AI solutions tailored to your
              business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pillar 1: AI Platform */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group border border-gray-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mb-6 group-hover:bg-gray-600 transition-colors duration-200">
                <RocketLaunchIcon className="w-8 h-8 text-gray-200" />
              </div>

              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Akila AI Platform
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Effortless AI Deployment & Management
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    User-Friendly No-Code Interface
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Rapid Model Training & Evaluation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Significant Cost Savings vs. Enterprise Alternatives
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Integrates Seamlessly with Your Data
                  </span>
                </li>
              </ul>

              <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium">
                Explore the Platform
              </button>
            </div>

            {/* Pillar 2: Custom Hardware */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group border border-gray-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mb-6 group-hover:bg-gray-600 transition-colors duration-200">
                <CpuChipIcon className="w-8 h-8 text-gray-200" />
              </div>

              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Akila Custom AI Hardware
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Optimize Cloud Spend. Maximize Data Privacy.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Purpose-Built for AI Workloads
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Reduce Cloud Compute Expenses
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Enhanced Data Control with Private LLMs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Pre-optimized & Plug-and-Play
                  </span>
                </li>
              </ul>

              <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium">
                View Hardware Solutions
              </button>
            </div>

            {/* Pillar 3: Bespoke Solutions */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group border border-gray-200">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mb-6 group-hover:bg-gray-600 transition-colors duration-200">
                <UserGroupIcon className="w-8 h-8 text-gray-200" />
              </div>

              <h3 className="text-2xl font-medium text-gray-800 mb-4">
                Akila Bespoke AI Solutions
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                AI Tailored to Your Exact Business Needs
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    End-to-End Implementation Support
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Leverage Akila Platform & Hardware Expertise
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Strategic Guidance from Concept to ROI
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">
                    Custom Integration & Training
                  </span>
                </li>
              </ul>

              <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium">
                Consult Our AI Experts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Akila Section */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">
              Why Akila?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We're redefining what's possible with AI by making it accessible,
              affordable, and completely under your control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-50 border border-gray-300 rounded-full mb-6 mx-auto group-hover:bg-gray-100 transition-colors duration-200">
                <CurrencyDollarIcon className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Cost Efficiency
              </h3>
              <p className="text-gray-600 font-light">
                Unlock AI's Power, Not Its Price Tag
              </p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-50 border border-gray-300 rounded-full mb-6 mx-auto group-hover:bg-gray-100 transition-colors duration-200">
                <ShieldCheckIcon className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Privacy & Control
              </h3>
              <p className="text-gray-600 font-light">
                Your Data Stays Yours. Your Models Stay Yours.
              </p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-50 border border-gray-300 rounded-full mb-6 mx-auto group-hover:bg-gray-100 transition-colors duration-200">
                <RocketLaunchIcon className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Simplicity & Speed
              </h3>
              <p className="text-gray-600 font-light">
                From Idea to Impact, Faster
              </p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-50 border border-gray-300 rounded-full mb-6 mx-auto group-hover:bg-gray-100 transition-colors duration-200">
                <WrenchScrewdriverIcon className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Customization
              </h3>
              <p className="text-gray-600 font-light">
                Designed for Your Unique Challenges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-200 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              See how leading organizations are transforming their operations
              with Akila's integrated AI solutions.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-8">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-gray-200 font-medium text-xl mr-4">
                  {testimonials[currentTestimonial].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600 font-light">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-gray-300" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gray-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-200 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Join the growing number of organizations leveraging Akila's complete
            AI ecosystem to drive innovation, reduce costs, and maintain
            complete data control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Your AI Journey
              <ChevronRightIcon className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-gray-400 text-gray-300 font-medium rounded-lg hover:bg-gray-600 hover:text-gray-200 transition-all duration-200">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
