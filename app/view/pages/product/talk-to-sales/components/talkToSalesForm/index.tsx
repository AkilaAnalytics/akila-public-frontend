import { useState } from 'react'
import { useFetcher } from 'react-router-dom'

import { Button } from '~/view/components'

export default function TalkToSalesForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',

    businessName: '',
    phone: '',
    jobTitle: '',
    department: ''
  })
  const fetcher = useFetcher()

  return (
    <div className="w-[100%]  ">
      <div className="flex  w-full items-center justify-center bg-[#191919] p-[40px]">
        <fetcher.Form
          className="flex min-h-[492px] w-full flex-col"
          action="/api/contact-us"
          method="post">
          <h2 className="font-raleway mb-[40px] text-[24px] font-semibold leading-8">
            Fill out this form to request a call from Akila’s sales
            representative.
          </h2>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input
            type="text"
            placeholder="Company"
            name="company"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input type="hidden" name="source" value="TalkToSalesForm" />

          <button className="mt-[8px] min-h-[60px] w-full bg-red-500 bg-gradient-to-r from-linkText to-primary">
            Submit
          </button>
        </fetcher.Form>
      </div>
    </div>
  )
}
