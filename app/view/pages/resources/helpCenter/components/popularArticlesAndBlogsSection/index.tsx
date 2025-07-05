export default function PopularArticlesAndBlogsSection({ children }) {
  return (
    <>
      <div className=" my-[50px] bg-[#191919]  py-[91px]">
        <div className=" container_class flex flex-col items-center justify-between sm:flex-row ">
          {children}
        </div>
      </div>
    </>
  )
}
