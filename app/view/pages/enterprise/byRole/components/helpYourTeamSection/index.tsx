export default function HelpYourTeamSection({ children }) {
  return (
    <div className="container_class">
      <div className="my-[50px]">
        <h3 className="text-center font-sans text-[40px] font-semibold leading-[48px] text-[#E3E3E3]">
          Help your team to get work done, faster and smarter.
        </h3>
        {children}
      </div>
    </div>
  )
}
