import { useFetcher } from "react-router";
import { StatusMessageFetcher } from "~/view/components";

export interface IFetcherResponse {
  ok: boolean;
}
export default function ContactUs() {
  const fetcher = useFetcher<IFetcherResponse>();

  return (
    <div className="my-[50px] flex items-center justify-center p-3 ">
      <div>
        <h2 className="pb-[72px] text-center font-sans text-[24px] font-semibold leading-[88.19%] text-[#E3E3E3]">
          Contact Us
        </h2>
        <fetcher.Form action="/api/contact-us" method="post">
          <div className="mb-[17px] flex flex-col gap-x-[30px] gap-y-[17px] sm:flex-row">
            <input
              placeholder="First Name"
              name="firstName"
              type="text"
              className="min-h-[45px] w-full rounded-[5px] border-2 border-white border-opacity-25 bg-transparent p-[10px] focus:outline-none"
            />
            <input
              placeholder="Last Name"
              name="lastName"
              type="text"
              className="min-h-[45px] w-full rounded-[5px] border-2 border-white border-opacity-25 bg-transparent p-[10px]  focus:outline-none"
            />
          </div>
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="mb-[17px]  min-h-[45px] w-full rounded-[5px] border-2 border-white border-opacity-25 bg-transparent p-[10px]  focus:outline-none"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="mb-[40px] min-h-[146px]  w-full rounded-[5px] border-2 border-white border-opacity-25 bg-transparent p-[17px] focus:outline-none"
          ></textarea>
          {/* hidden fields */}
          <input
            type="hidden"
            name="source"
            value="contact us form on home-page"
          />
          <input
            className="absolute-0 opacity-0"
            autoComplete="off"
            type="text"
            id="message2"
            name="message2"
            placeholder="Second Message"
          />
          <div className="flex items-center justify-center">
            <button
              className="button-gradient hover:button-gradient-hover w-full max-w-[100%] rounded-md bg-periwinkle py-3 hover:scale-105"
              type="submit"
            >
              SEND
            </button>
          </div>
        </fetcher.Form>
        {fetcher.data && (
          <StatusMessageFetcher
            fetcher={fetcher}
            successMessage="Thank you for your message. We will reach out shortly."
            errorMessage="There was an unexpected erorr receiving your message. Please try reaching out again."
          />
        )}
      </div>
    </div>
  );
}
