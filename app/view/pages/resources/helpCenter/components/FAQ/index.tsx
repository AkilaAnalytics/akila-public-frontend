import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ({ question, answer }) {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <div>
            <Disclosure.Button className="flex min-h-[66px] w-full items-center justify-between bg-white  bg-opacity-10 p-4 text-gray-800 ">
              <span className="font-raleway text-base leading-6 text-white ">
                {/* {faq.question} */}
                {question}
              </span>
              {open ? (
                <ChevronUpIcon className="h-5 w-5 text-[#3134DB]" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-[#3134DB]" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-all ease-out duration-100"
              enterFrom="opacity-0 max-h-0"
              enterTo="opacity-100 max-h-screen"
              leave="transition-all ease-in duration-100"
              leaveFrom="opacity-100 max-h-screen"
              leaveTo="opacity-0 max-h-0">
              <Disclosure.Panel className=" bg-white bg-opacity-10  p-4 ">
                <p className="font-raleway text-base font-normal text-[#DADEDF]">
                  {/* {faq.answer} */}
                  {answer}
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </>
  )
}
