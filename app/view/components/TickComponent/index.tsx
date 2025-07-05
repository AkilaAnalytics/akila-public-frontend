import { Tick } from '~/view/assets'

export default function TickComponent() {
  return (
    <div className="flex h-[22px] w-full max-w-[22px] items-center justify-center rounded-full bg-white">
      <img src={Tick} alt="" />
    </div>
  )
}
