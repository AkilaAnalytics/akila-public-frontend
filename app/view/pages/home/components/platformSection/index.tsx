import { ArrowDown, OutlineObjective } from '~/view/assets'
import HorizontalLine from '../horizontailLine'

export default function PlatformSection({ children }) {
  return (
    <div className="container_class ">
      <div className="my-[50px]">
        <div>
          <div className="mx-auto max-w-[250px] rounded-full bg-gradient-to-r from-periwinkle to-darkBlue p-[1px] text-center">
            <h5 className="px-15 mx-auto rounded-full bg-secondaryBackground py-3 font-sans">
              USE CASE
            </h5>
          </div>{' '}
          <div className="flex justify-center">
            <img src={ArrowDown} alt="" />
          </div>{' '}
          {/* Arrow down*/}
          <div className=" mt-[9px] border-2  border-[#3134DB] px-[10px] py-[64px]">
            {' '}
            {/* Platform Cards container*/}
            <h6 className="mb-[46px] text-center font-sans">
              THE <span className="font-semibold">AKILA</span> WORKFLOW
            </h6>
            {children} {/* cards*/}
          </div>
          <div className="mt-3 flex justify-center">
            <img src={ArrowDown} alt="" />
          </div>{' '}
          <div className="mx-auto max-w-[250px] rounded-full bg-gradient-to-r from-periwinkle to-darkBlue p-[1px] text-center">
            <h5 className="px-15 mx-auto rounded-full bg-secondaryBackground py-3 font-sans">
              END USERS
            </h5>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
