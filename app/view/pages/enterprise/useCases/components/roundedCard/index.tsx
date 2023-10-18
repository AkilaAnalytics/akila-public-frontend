export default function RoundedCard({ active, text }) {
  return (
    <div
      className={`flex min-h-[51px] w-[170px] items-center  justify-center rounded-[48px] px-[20px] py-[7.5px] ${
        active ? 'bg-[#FFFFFF]' : 'border-[1px] border-[#4E4E4E]'
      }  `}>
      <div
        className={`font-raleway ${
          active ? 'text-[ #020710]' : 'text-[#808080]'
        }  text-sm font-normal leading-4 text-gray-600`}>
        {text}
      </div>
    </div>
  )
}
