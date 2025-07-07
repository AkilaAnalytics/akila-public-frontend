import { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router";

const formatAmount = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency?.toUpperCase() || "USD",
  }).format(amount / 100);
};

const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Return() {
  const { sessionId, baseUrl } = useLoaderData();
  const [status, setStatus] = useState("loading");
  const [sessionData, setSessionData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionId) {
      navigate("/checkout");
      return;
    }

    const checkSessionStatus = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/stripe/session-status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session_id: sessionId }),
        });

        const data = await response.json();
        setStatus(data.status);
        setSessionData(data);
      } catch (error) {
        console.error("Error checking session status:", error);
        setStatus("error");
      }
    };

    checkSessionStatus();
  }, [sessionId, baseUrl, navigate]);

  // Loading State
  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-green-600"></div>
          <p className="text-gray-600">Processing your subscription...</p>
        </div>
      </div>
    );
  }

  // Redirect to checkout if session is still open
  if (status === "open") {
    navigate("/checkout");
    return null;
  }

  // Error State
  if (status === "error") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 px-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
          <div className="mb-4 text-5xl text-red-500">⚠️</div>
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            Something went wrong
          </h1>
          <p className="mb-6 text-gray-600">
            There was an error processing your subscription. Please try again or
            contact support.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate("/checkout")}
              className="w-full rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Return to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (status === "complete" && sessionData) {
    return (
      <div className="bg-background min-h-screen px-4 py-12">
        <div className="mx-auto md:w-[50vw]">
          {/* Go to Product Button - Prominent at top */}
          <div className="mb-8 text-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-periwinkle inline-flex transform cursor-pointer items-center space-x-2 rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:from-green-700 hover:to-blue-700 hover:shadow-xl"
            >
              <span>🚀</span>
              <span>Go to Dashboard</span>
            </button>
          </div>

          {/* Success Card */}
          <div className="border-periwinkle bg-secondary rounded-xl border-[1px]">
            {/* Header */}
            <div className="p-8 text-center text-white">
              <h3 className="mb-2 text-3xl font-bold">
                Thank you for subscribing
              </h3>
              <p className="text-green-100">Your subscription is now active</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Subscription Details */}
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg p-6">
                  <h6 className="mb-3 text-lg font-semibold text-gray-300">
                    Subscription Details
                  </h6>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Plan:</span>
                      <span className="font-medium">Premium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Amount:</span>
                      <span className="font-medium">
                        {formatAmount(
                          sessionData.amount_total,
                          sessionData.currency
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Billing:</span>
                      <span className="font-medium">
                        {sessionData.mode === "subscription"
                          ? "Monthly"
                          : "One-time"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Started:</span>
                      <span className="font-medium">
                        {formatDate(sessionData.created)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg p-6">
                  <h6 className="mb-3 text-lg font-semibold text-gray-300">
                    Account Information
                  </h6>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-5">
                      <span className="text-gray-300">Email:</span>
                      <span className="font-medium">
                        {sessionData.customer_email}
                      </span>
                    </div>
                    {sessionData.customer_name && (
                      <div className="flex gap-5">
                        <span className="text-gray-300">Name:</span>
                        <span className="font-medium">
                          {sessionData.customer_name}
                        </span>
                      </div>
                    )}
                    <div className="flex gap-5">
                      <span className="text-gray-300">ID:</span>
                      <span className="font-medium">
                        {sessionData.subscription_id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="mb-6 rounded-lg bg-blue-50 p-6">
                <h6 className="mb-3 text-lg font-semibold text-blue-900">
                  What&apos;s Next?
                </h6>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-300">✓</span>
                    <span>
                      Confirmation email sent to {sessionData.customer_email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-300">✓</span>
                    <span>Access to all premium features activated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-300">✓</span>
                    <span>Free trial started</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="button-primary"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/settings")}
                  className="cursor-pointer rounded-lg border-2 border-gray-300 px-6 py-3 transition-all duration-200 hover:border-gray-400"
                >
                  Account Settings
                </button>
              </div>

              {/* Support */}
              <div className="mt-8 border-t border-gray-200 pt-6 text-center">
                <p className="text-sm text-gray-600">
                  Need help getting started?{" "}
                  <a
                    href="mailto:support@AkilaAnalytics.com"
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    Contact our support team
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success State
  return null;
}

// NOTE: This works for custom components
//export default function Return() {
//  const [status, setStatus] = useState(null);
//  const [customerEmail, setCustomerEmail] = useState('');
//  const navigate = useNavigate();
//
//  useEffect(() => {
//    const queryString = window.location.search;
//    const urlParams = new URLSearchParams(queryString);
//    const sessionId = urlParams.get('session_id');
//
//    fetch(`/session-status?session_id=${sessionId}`)
//      .then((res) => res.json())
//      .then((data) => {
//        setStatus(data.status);
//        setCustomerEmail(data.customer_email);
//      });
//  }, []);
//
//  if (status === 'open') {
//    return navigate('/checkout');
//  }
//
//  if (status === 'complete') {
//    return (
//      <section id="success">
//        <p>
//          We appreciate your business! A confirmation email will be sent to{' '}
//          {customerEmail}. If you have any questions, please email{' '}
//          <a href="mailto:orders@example.com">orders@example.com</a>.
//        </p>
//      </section>
//    );
//  }
//
//  return null;
//}
