import { HomePageBackground } from "~/view/assets";
import { homePageIcon } from "~/view/assets/icons";
import { GradientLine, SectionBreak } from "~/view/components";

export default function Hero() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <img src={HomePageBackground} className="absolute h-full w-full" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Scattered connection nodes */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>
        <div className="absolute top-80 left-1/2 w-1 h-1 bg-gray-500 rounded-full opacity-60"></div>

        {/* Connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          <line
            x1="80"
            y1="80"
            x2="200"
            y2="128"
            stroke="rgba(16,16,19)"
            strokeWidth="0.5"
          />
          <line
            x1="200"
            y1="128"
            x2="300"
            y2="240"
            stroke="rgba(16,16,19)"
            strokeWidth="0.5"
          />
          <line
            x1="80%"
            y1="160"
            x2="90%"
            y2="320"
            stroke="rgba(16,16,19)"
            strokeWidth="0.5"
          />
          <line
            x1="50%"
            y1="320"
            x2="60%"
            y2="80"
            stroke="rgba(16,16,19)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <SectionBreak title="Made Easy" />

        {/* Main content */}
        <div className="flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
              Machine Learning
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Simplify and automate your data analytics workflows with an
              <br />
              intuitive and easy-to-use interface.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-16">
            <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Book a demo
            </button>
            <button className="border border-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Try free
            </button>
          </div>

          {/* Analytics Interface */}
          <img src={homePageIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
