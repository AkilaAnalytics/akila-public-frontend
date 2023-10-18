import { SeeAll } from '~/view/assets'
export default function ReleatedResources({ children }) {
  return (
    <div className="via-opacity-0 min-h-[552px] bg-gradient-to-r from-transparent via-[#0B121F] to-transparent  py-[80px]">
      <div className=" container_class">
        <div className="mb-[40px] flex justify-between">
          <div className="text-3xl">Related Resources</div>
          {/* <div className="flex items-center text-[#3134DB]">
            <div className="mr-2"> See all Resources</div>
            <img src={SeeAll} alt="" />
          </div> */}
        </div>
        {children}
      </div>
    </div>
  )
}
