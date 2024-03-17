import { useFetcher } from 'react-router-dom'

import { StatusMessageFetcher } from '~/view/components'

export default function DemoPageForm() {
  const fetcher = useFetcher()

  const inputClassName =
    'mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B] rounded-md outline-none'
  return (
    <div className="w-[100%]">
      <div className="min-h-[751px] w-full items-center justify-center bg-[#191919] p-10">
        <h1 className="mb-[40px] text-center font-sans text-5xl font-semibold leading-10">
          Schedule a Demo Today
        </h1>
        <fetcher.Form
          method="post"
          action="/api/contact-us"
          className="flex min-h-[652px] w-full flex-col"
        >
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className={inputClassName}
            maxLength={10}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className={inputClassName}
            maxLength={10}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            className={inputClassName}
            maxLength={12}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className={inputClassName}
            maxLength={25}
          />
          <input
            type="text"
            placeholder="Company"
            name="company"
            className={inputClassName}
            maxLength={15}
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            className={inputClassName}
            maxLength={15}
          />
          <input type="hidden" name="source" value="demoPage" />
          <button
            type="submit"
            className="button-gradient mt-[8px] min-h-[60px] w-full rounded-md bg-red-500"
          >
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
