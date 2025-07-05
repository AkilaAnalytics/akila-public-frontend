export default function TeamsAndRolesCard({ icon, cardName }) {
  return (
    <div className="min-h-[174px] w-full">
      <div className="mb-[16px]">
        <div className="flex h-[128px] max-w-[144px] items-center justify-center rounded-lg bg-[#3C4354] ">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="text-center">{cardName}</div>
    </div>
  )
}
