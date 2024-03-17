export default function TrustedBySection({ heading, children }) {
  return (
    <div className="container_class hidden">
      <div className="my-[50px] ">
        <h2 className="pb-[48px] text-center font-sans text-[40px] font-semibold leading-[48px] text-[#E7E7E7]">
          {heading}
        </h2>

        <div className="flex justify-between gap-12 overflow-x-auto px-4 sm:overflow-scroll lg:overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
