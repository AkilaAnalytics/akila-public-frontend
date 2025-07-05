import HorizontalLine from '../horizontailLine'

interface IProps {
  heading: string
  children: React.ReactNode
}

export default function SolutionsByPositions({ heading, children }: IProps) {
  return (
    <div className="container_class">
      <div className="my-[50px] flex flex-col items-center">
        <div className="pb-[20px] text-center font-sans text-[40px] font-semibold leading-[88%]">
          {heading}
        </div>
        <HorizontalLine />
      </div>
      {children}
    </div>
  )
}
