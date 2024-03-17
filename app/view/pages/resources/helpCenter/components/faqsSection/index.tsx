import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQsSection({ children, sectionHeading }) {
  return (
    <div className="my-[50px]">
      <div className="container_class space-y-5  ">
        <div className="mb-12 text-center font-sans text-[32px] font-semibold leading-10">
          {sectionHeading}
        </div>
        {children}
      </div>
    </div>
  )
}
