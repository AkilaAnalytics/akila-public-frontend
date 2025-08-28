import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import type { IResponse } from "~/utils";

interface ContactFormProps {
  type: "short" | "expanded";
  className?: string;
}

export default function ContactForm({ type, className }: ContactFormProps) {
  const fetcher = useFetcher();
  const [message, setMessage] = useState<Partial<IResponse<string>>>({});

  useEffect(() => {
    setMessage({ data: fetcher.data });
  }, [fetcher.data]);

  const isExpanded = type === "expanded";

  return (
    <div
      className={`flex flex-col z-50 bg-formBackground border-[1px] border-borderColor rounded-md ${
        className || ""
      }`}
    >
      <fetcher.Form method="post" action="/contact-us">
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

          <br />
          <button
            type="submit"
            className="button-primary"
            disabled={fetcher.state === "submitting"}
          >
            {fetcher.state === "submitting" ? "Sending..." : "Send"}
          </button>
        </div>
        {message.message && (
          <div className="mt-2 text-center text-sm">{message.message}</div>
        )}
      </fetcher.Form>
    </div>
  );
}
