import HorizontalLine from '../horizontailLine'

export default function UseCaseSection({ heading, children }) {
  return (
    <div>
      <div className="my-[50px] flex flex-col items-center">
        <div className="font-raleway pb-[20px] text-[40px] font-semibold leading-[88%]">
          {heading}
        </div>
        <HorizontalLine />
      </div>
      {children}
    </div>
  )
}
