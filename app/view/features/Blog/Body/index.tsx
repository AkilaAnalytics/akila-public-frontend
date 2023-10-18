interface IProps {
  children: React.ReactNode
}

//<div className="w-full mx-auto flex">
//  <div className="justify-center items-center mx-auto w-1/2">
//    {children}
//  </div>
//</div>
export default function Body({ children }: IProps) {
  return (
    <div className="w-full md:w-1/2 mx-auto flex flex-col justify-center tracking-[0.3px] border-b-[1px] border-gray-800 px-5 md:px-0">
      {children}
      <br />
      <br />
      <br />
    </div>
  )
}
