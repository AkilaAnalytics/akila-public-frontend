export default function BuildDataSolutionSection({ heading, children }) {
  return (
    <div className="container_class">
      <div className="my-[50px]">
        <h2 className="text-center font-sans text-[40px] font-semibold leading-[48px] text-[#E3E3E3]">
          {heading}
        </h2>
      </div>
      {children}
    </div>
  )
}
