import { ArrowDown, OutlineObjective } from '~/view/assets'
import HorizontalLine from '../horizontailLine'

export default function PlatformSection({ children }) {
  return (
    <div className="container_class ">
      <div className="my-[50px]">
        <div className="flex flex-col items-center">
          <div className="font-raleway mb-[20px] text-center text-[40px] font-semibold leading-[88.19%] text-[#FFFFFF]">
            Platform
          </div>
          <HorizontalLine />
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${OutlineObjective})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="mx-auto mt-[50px] flex min-h-[52px] max-w-[226px] items-center  justify-center">
            <h3 className="font-raleway text-2xl">Outline Objective</h3>
          </div>{' '}
          <div className="flex justify-center">
            <img src={ArrowDown} alt="" />
          </div>{' '}
          {/* Arrow down*/}
          <div className=" mt-[9px] border-2  border-[#3134DB] px-[10px] py-[64px]">
            {' '}
            {/* Platform Cards container*/}
            <h3 className="mb-[46px] text-center">Akila Analytics</h3>
            {children} {/* cards*/}
          </div>
          <div className="mt-3 flex justify-center">
            <img src={ArrowDown} alt="" />
          </div>{' '}
          <div
            style={{
              backgroundImage: `url(${OutlineObjective})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="mx-auto mt-[20px] flex min-h-[52px] max-w-[306px] items-center  justify-center">
            <h3 className="font-raleway text-2xl">End Users & Consumers</h3>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
