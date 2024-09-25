import type { IBlogMeta } from "~/routes/resources.insights_";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useFetcher, useLoaderData, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { logger } from "~/utils";

function sanitizeEmail(input: string) {
  const trimmed = input.trim().toLowerCase();
  if (trimmed.includes("@") && trimmed.includes(".")) {
    return true;
  } else {
    return false;
  }
}

export default function EmailSignUp() {
  // state
  const [showForm, setShowForm] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [honeyPot, setHoneyPot] = useState<string>("");
  const fetcher = useFetcher();
  const location = useLocation();
  const res = useLoaderData<IBlogMeta>();

  if (res?.isSubscribed) {
    setShowForm(false);
  }

  // set up cookie so that user does not see the pop up form after they subscribe
  const onClick = () => {
    if (isValidEmail) {
      setShowForm(false);
      fetcher.submit(
        {
          email,
          actionType: "subscribe",
          source: location.pathname,
          hPot: honeyPot,
        },
        { action: "/api/email-sign-up", method: "post" }
      );
    }
  };

  useEffect(() => {
    const valid = sanitizeEmail(email);
    setIsValidEmail(valid);
    logger.log(isValidEmail, "<<< isValidEmail");
  }, [email]);
  if (!showForm) return null;
  if (res?.isSubscribed) return null;

  return (
    <div className="sticky bottom-0 flex w-full flex-col border-t-[1px] border-t-periwinkle bg-secondaryBackground px-5">
      <XMarkIcon
        className="m-2 ml-auto h-5 w-5 cursor-pointer text-white"
        onClick={() => setShowForm(false)}
      />
      <div className="mx-auto">
        <h4 className="wrap text-center">Sign up for emails on new articles</h4>
        <p className="block text-center">
          Never miss an insight. We'll email you when new articles are
          published.
        </p>
        <br />

        <div className="mx-auto flex w-full flex-col gap-5 md:w-3/4 md:flex-row">
          <input
            type="email"
            className="w-full p-2 text-black focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={`cursor-pointer rounded-md bg-periwinkle p-2 ${
              !isValidEmail ? "disabled" : ""
            }`}
            onClick={onClick}
            disabled={!isValidEmail}
          >
            Subscribe
          </button>
          <input
            type="hidden"
            name="hPot"
            value={honeyPot}
            onChange={(e) => setHoneyPot(e.target.value)}
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
