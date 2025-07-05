import HorizontalLine from '../horizontailLine'

export default function UseCaseSection({ heading, children }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="pb-[20px] font-sans text-[40px] font-semibold leading-[88%]">
          {heading}
        </div>
        <HorizontalLine />
      </div>
      {children}
    </div>
  )
}
