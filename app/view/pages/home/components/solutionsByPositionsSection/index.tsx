export default function SolutionsByPositions({ heading, children }) {
  return (
    <div className="container_class">
      <div className="my-[50px] flex flex-col items-center">
        <div className="font-raleway pb-[20px] text-[40px] font-semibold leading-[88%]">
          {heading}
        </div>
      </div>
      {children}
    </div>
  )
}
