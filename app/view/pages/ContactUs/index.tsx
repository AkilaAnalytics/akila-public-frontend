import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import { email, world, mapPin, phone } from "~/view/assets";
import { GridBackground } from "~/view/components";
import type { IResponse } from "~/utils";

const details = [
  {
    image: email,
    text: "support@AkilaAnalytics.com",
  },
  {
    image: phone,
    text: "(800) 609-0675",
  },
  {
    image: world,
    text: "AkilaAnalytics.com",
  },
  {
    image: mapPin,
    text: "66 W Flagler St 66 W Flagler St Miami, FL 33130",
  },
];
export default function ContactUs() {
  const fetcher = useFetcher();
  const [message, setMessage] = useState<Partial<IResponse<string>>>({});

  useEffect(() => {
    setMessage({ data: fetcher.data });
  }, [fetcher.data]);

  return (
    <div className="relative">
      <GridBackground />
      <div className="flex flex-col md:flex-row">
        <div>
          <h2 className="title-gradient">Contact us</h2>
          <p>
            One of our product experts will provide a demonstration tailored to
            your needs.
          </p>
          {details.map((ele) => {
            return (
              <div className="flex gap2">
                <img src={ele.image} alt={ele.text} className="h-5 w-5" />
                <p>{ele.text}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-formBackground">
          <fetcher.Form method="post" action="/contact-us">
            <div className="p-5 flex flex-col border-white/5 border-[1px] rounded-md">
              <h6>Contact Us</h6>
              <br />
              <label htmlFor="firstName" className="mt-2">
                First
              </label>
              <input
                name="firstName"
                type="text"
                className="contact-us-input"
              />
              <label htmlFor="lastName" className="mt-2">
                Last
              </label>
              <input name="lastName" type="text" className="contact-us-input" />
              <label htmlFor="email" className="mt-2">
                Email
              </label>
              <input name="email" type="email" className="contact-us-input" />
              <label htmlFor="message" className="mt-2">
                Message
              </label>
              <textarea rows={6} name="message" className="contact-us-input" />
              <br />
              <button className="button-primary">Send</button>
            </div>
            {message.message}
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
}
