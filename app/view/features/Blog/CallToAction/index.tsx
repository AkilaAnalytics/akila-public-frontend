import { useAppContext } from "~/view/context";

export default function CallToAction() {
  const { openChat } = useAppContext();

  return (
    <div className="mt-16">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative px-8 py-12 md:px-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Let's continue the conversation
            </h3>

            {/* Subheading */}
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Have questions about the analysis? Want to explore these insights
              further? I'd love to dive deeper into the data with you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:Brandon@AkilaAnalytics.com"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px]"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>

              <button
                onClick={openChat}
                className="cursor-pointer group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Chat with us
              </button>
            </div>

            {/* Trust indicator */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400">
                <span className="inline-flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Usually responds within 24 hours
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
