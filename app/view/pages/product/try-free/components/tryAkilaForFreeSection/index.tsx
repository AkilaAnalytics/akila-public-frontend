import { useState } from 'react'

import { Tick } from '~/view/assets'
import { Button, TickComponent } from '~/view/components'
import TrustedBySection from '~/view/components/TrustedBySection'

export default function TryAkilaForFreeSection() {
  const [email, setEmail] = useState('')

  const emailHandler = (e) => setEmail(e.target.value)
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container_class">
      <div className="mx-auto mb-[50px] mt-[120px] min-h-[436px] max-w-[575px] ">
        <div className="  pb-[70px]">
          <h2 className="font-raleway mb-[11px] text-center text-[32px] font-semibold sm:text-[40px]">
            Try Akila for Free
          </h2>
          <p className="font-raleway mb-[40px] text-center text-[14px] font-medium sm:text-[18px]">
            Sign up for our free trial to see how Akila Analytics can help you
            gain insights from your data, make data-driven decisions, and drive
            business growth.
          </p>
          <form
            onSubmit={submitHandler}
            className=" flex gap-1 rounded-full border-2 border-[#0398E1] p-[4px]">
            <input
              value={email}
              onChange={emailHandler}
              type="text"
              className="w-full rounded-full bg-transparent pl-3 pr-2 focus:outline-none"
            />

            <button
              type="submit"
              className="to-primary' min-h-[49px] w-full max-w-[170px] rounded-full bg-gradient-to-r from-linkText to-primary">
              Create Account
            </button>
          </form>
        </div>
        {/*  */}
        <div>
          {tryAkilaForFreeListData.map((data, index) => (
            <div className="flex " key={data.heading + index}>
              <TickComponent />
              <div className="font-raleway mb-[16px] ml-[16px] text-[20px] leading-[28px] text-[#E7E7E7]">
                <span className=" font-bold">{data.heading}</span>.
                <span className="ml-[3px]">{data.description}</span>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  )
}

const tryAkilaForFreeListData = [
  {
    heading: 'Easy to use',
    description: 'Akila is designed to for non-technical users'
  },
  {
    heading: 'Connect and transform',
    description: ' Explore advanced analytics tools'
  },
  {
    heading: 'Visualize and analyze',
    description: 'Create and share analytics output'
  },
  {
    heading: 'Rapid Setup',
    description: 'Launch and streamline workflows in minutes'
  }
]
