import { Link } from '@remix-run/react'
export default function ReleatedResourcesCard({
  category,
  description,
  bgImg,
  link
}) {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className="min-h-[312px] w-full max-w-[350px] bg-red-300 bg-cover bg-center bg-no-repeat"
          style={{ background: `url(${bgImg})` }}>
          <div className="pl-[20px] pt-[20px]">
            <div className="inline rounded-[24px] bg-white px-[12px] py-[4px] font-extrabold uppercase text-[#19224A]">
              {category}
            </div>
            <div className="mt-[24px]">{description}</div>
          </div>
        </Link>
      ) : (
        <div
          className="min-h-[312px] w-full max-w-[350px] bg-red-300 bg-cover bg-center bg-no-repeat"
          style={{ background: `url(${bgImg})` }}>
          <div className="pl-[20px] pt-[20px]">
            <div className="inline rounded-[24px] bg-white px-[12px] py-[4px] font-extrabold uppercase text-[#19224A]">
              {category}
            </div>
            <div className="mt-[24px]">{description}</div>
          </div>
        </div>
      )}
    </>
  )
}
