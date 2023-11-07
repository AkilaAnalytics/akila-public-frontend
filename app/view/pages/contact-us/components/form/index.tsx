import type { IFetcherResponse } from '~/view/pages/home/components/contactUs'

import type { ILoaderData } from '~/utils/types'

import { useFetcher } from 'react-router-dom'

import { StatusMessageFetcher } from '~/view/components'
import { useLoaderData } from '@remix-run/react'

export default function Form() {
  const fetcher = useFetcher<IFetcherResponse>()
  const loaderData = useLoaderData<ILoaderData>()

  return (
    <div>
      <div className="gradient-div mx-auto my-[100px] w-full rounded-[9px] p-[48px] md:w-2/3">
        <h2 className="font-raleway mb-[32px] text-center font-semibold leading-[40px] text-[#E7E7E7] text-[push32px]">
          Let us know how we can help!
        </h2>
        <h5 className="text-center font-sans">
          Call us directly at:{' '}
          <span className="font-poppins">{loaderData.PHONE_NUMBER}</span>
        </h5>
        <br />
        <br />
        <br />
        <br />

        <fetcher.Form
          method="post"
          action="/api/contact-us"
          className="mx-auto max-w-[820px]">
          <div className="flex flex-col gap-x-[20px] sm:flex-row">
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-[rgb(26,24,58)] px-[8px] py-[16px] focus:outline-none"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-[rgb(26,24,58)] px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-x-[20px]   sm:flex-row">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-[rgb(26,24,58)] px-[8px] py-[16px] focus:outline-none"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-[rgb(26,24,58)] px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-x-[20px]   sm:flex-row">
            <input
              name="company"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-[rgb(26,24,58)] px-[8px] py-[16px] focus:outline-none"
              placeholder="Company Name"
            />
            <input
              name="jobTitle"
              placeholder="Job Title"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-[rgb(26,24,58)] px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            className="min-h-[203px] w-full rounded-md border-[1px] border-periwinkle bg-[rgb(26,24,58)] px-[8px] py-[8px] focus:outline-none"
            name="message"
          />{' '}
          <input type="hidden" name="source" value="contact-us form" />
          <button className="button-gradient hover:button-gradient-hover mt-[32px] w-full rounded-md px-1 py-[16px] hover:scale-105">
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
