import type { IFetcherResponse } from '~/view/pages/home/components/contactUs'

import { useFetcher } from 'react-router-dom'

import { StatusMessageFetcher } from '~/view/components'

export default function Form() {
  const fetcher = useFetcher<IFetcherResponse>()

  return (
    <div className="container_class">
      <div className="my-[100px] rounded-[9px] bg-[#191919] p-[48px]">
        <h2 className="font-raleway mb-[32px] text-center font-semibold leading-[40px] text-[#E7E7E7] text-[push32px]">
          Let us know how we can help!
        </h2>

        <fetcher.Form
          method="post"
          action="/api/contact-us"
          className="mx-auto max-w-[820px]">
          <div className="flex flex-col gap-x-[20px]   sm:flex-row">
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              className="mb-[24px] w-full rounded-md bg-[#030912] px-[8px] py-[16px] focus:outline-none"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="mb-[24px] w-full rounded-md bg-[#030912]  px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-x-[20px]   sm:flex-row">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="mb-[24px] w-full rounded-md bg-[#030912] px-[8px] py-[16px] focus:outline-none"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              className="mb-[24px] w-full rounded-md bg-[#030912] px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-x-[20px]   sm:flex-row">
            <input
              name="company"
              type="text"
              className="mb-[24px] w-full rounded-md bg-[#030912] px-[8px] py-[16px] focus:outline-none"
              placeholder="Company Name"
            />
            <input
              name="jobTitle"
              placeholder="Job Title"
              type="text"
              className="mb-[24px] w-full rounded-md bg-[#030912] px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            className="min-h-[203px] w-full rounded-md bg-[#030912]  px-[8px] py-[8px]"
            name="message"
          />{' '}
          <input type="hidden" name="source" value="contact-us form" />
          <button className="bg-gradient-to-r mt-[32px] w-full rounded-md bg-periwinkle from-linkText to-turqoise px-1 py-[16px]">
            Submit
          </button>
          {fetcher.data && (
            <StatusMessageFetcher
              fetcher={fetcher}
              successMessage="Thank you for your message. We will reach out shortly."
              errorMessage="There was an unexpected erorr receiving your message. Please try reaching out again."
            />
          )}
        </fetcher.Form>
      </div>
    </div>
  )
}
