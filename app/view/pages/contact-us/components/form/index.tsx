import type { IFetcherResponse } from '~/view/pages/home/components/contactUs'

import type { ILoaderData } from '~/utils/types'

import { useFetcher } from 'react-router-dom'

import { StatusMessageFetcher } from '~/view/components'
import { useLoaderData } from '@remix-run/react'
import { email, internet, phone, location } from '~/view/assets'

export default function Form() {
  const fetcher = useFetcher<IFetcherResponse>()
  const loaderData = useLoaderData<ILoaderData>()

  const contactInfo = [
    {
      image: email,
      text: loaderData.SUPPORT_EMAIL
    },
    {
      image: phone,
      text: <p className="font-poppins">{loaderData.PHONE_NUMBER}</p>
    },
    {
      image: internet,
      text: <p className="font-poppins">AkilaAnalytics.com</p>
    },
    {
      image: location,
      text: (
        <p className="font-poppins">
          66 W Flagler St <br />
          Miami, FL 33130
        </p>
      )
    }
  ]

  return (
    <div>
      <div className="mx-auto flex w-full flex-col gap-10 p-10 md:flex-row">
        <div className="md:max-w-3/4 mx-auto w-full">
          <h2 className="font-raleway mx-auto mb-[32px] font-semibold leading-[40px] text-[#E7E7E7] text-[push32px]">
            Contact Us
          </h2>
          <p className="w-full md:w-1/2">
            One of our product experts will provide a demonstration tailored to
            your needs.
          </p>
          <div>
            {contactInfo.map((item) => (
              <div key={item.text} className="mt-5 flex gap-5">
                <img
                  src={item.image}
                  height="30"
                  width="30"
                  alt="Contact Info"
                />
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <fetcher.Form
          method="post"
          action="/api/contact-us"
          className="mx-auto w-full md:w-10/12">
          <div className="flex flex-col gap-x-[20px] sm:flex-row">
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-transparent px-[8px] py-[16px] focus:outline-none"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle  bg-transparent px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-x-[20px]   sm:flex-row">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-transparent px-[8px] py-[16px] focus:outline-none"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-transparent px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-x-[20px]   sm:flex-row">
            <input
              name="company"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-transparent px-[8px] py-[16px] focus:outline-none"
              placeholder="Company Name"
            />
            <input
              name="jobTitle"
              placeholder="Job Title"
              type="text"
              className="mb-[24px] w-full border-b-[1px] border-periwinkle bg-transparent px-[8px] py-[16px] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Message"
            className="min-h-[203px] w-full rounded-md border-[1px] border-periwinkle bg-transparent px-[8px] py-[8px] focus:outline-none"
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
