import { useEffect, useState } from "react";
import { useFetcher, useLocation } from "react-router";
import type { IResponse } from "~/utils";

interface ContactFormProps {
  type: "short" | "expanded";
  className?: string;
  source?: string; // Optional custom source for tracking
}

export default function ContactForm({
  type,
  className,
  source,
}: ContactFormProps) {
  const fetcher = useFetcher();
  const location = useLocation();
  const [message, setMessage] = useState<Partial<IResponse<string>>>({});

  useEffect(() => {
    if (fetcher.data) {
      setMessage(fetcher.data);
    }
  }, [fetcher.data, fetcher.state]);

  const isExpanded = type === "expanded";

  return (
    <div
      className={`flex flex-col z-50 bg-formBackground border-[1px] border-borderColor rounded-md ${
        className || ""
      }`}
    >
      <fetcher.Form method="post" action="/api/contact-us">
        <div className="p-5 flex flex-col border-white/5 border-[1px] rounded-md">
          <h6>Contact Us</h6>
          <br />

          {isExpanded ? (
            // Expanded version layout
            <>
              {/* Row 1: First name, Last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="mt-2">
                    First
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    className="contact-us-input"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="mt-2">
                    Last
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    className="contact-us-input"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone, Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="mt-2">
                    Phone
                  </label>
                  <input name="phone" type="tel" className="contact-us-input" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mt-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="contact-us-input"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Company, Job Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="company" className="mt-2">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="contact-us-input"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="jobTitle" className="mt-2">
                    Job Title
                  </label>
                  <input
                    name="jobTitle"
                    type="text"
                    className="contact-us-input"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="mt-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  className="contact-us-input"
                  required
                />
              </div>
            </>
          ) : (
            // Short version layout (existing)
            <>
              <label htmlFor="firstName" className="mt-2">
                First
              </label>
              <input
                name="firstName"
                type="text"
                className="contact-us-input"
                required
              />
              <label htmlFor="lastName" className="mt-2">
                Last
              </label>
              <input
                name="lastName"
                type="text"
                className="contact-us-input"
                required
              />
              <label htmlFor="email" className="mt-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="contact-us-input"
                required
              />
              <label htmlFor="message" className="mt-2">
                Message
              </label>
              <textarea
                rows={6}
                name="message"
                className="contact-us-input"
                required
              />
            </>
          )}

          {/* Hidden source field for tracking */}
          <input
            type="hidden"
            name="source"
            value={source || `Contact Form - ${location.pathname}`}
          />

          {/* Honeypot field - hidden from users but will catch bots */}
          <input
            type="text"
            name="message2"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <br />
          <button
            type="submit"
            className="button-primary"
            disabled={fetcher.state === "submitting"}
          >
            {fetcher.state === "submitting" ? "Sending..." : "Send"}
          </button>
        </div>

        {/* Success/Error Messages */}
        {message.message && (
          <div
            className={`mt-3 p-3 rounded-md text-center text-sm ${
              message.ok
                ? "bg-green-900/20 border border-green-500/30 text-green-400"
                : "bg-red-900/20 border border-red-500/30 text-red-400"
            }`}
          >
            {message.message}
          </div>
        )}
      </fetcher.Form>
    </div>
  );
}
