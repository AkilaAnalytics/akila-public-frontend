import { Link } from '@remix-run/react'

import { PlatformSectionCardBgImg } from '~/view/assets'

interface IProps {
  logo: string
  title: string
  link: string
}

export default function PlatformSectionCard({ logo, title, link }: IProps) {
  return (
    <Link
      to={link}
      className="flex min-h-[169px]   w-full max-w-[160px] flex-col items-center justify-center hover:scale-105"
      style={{
        backgroundImage: `url(${PlatformSectionCardBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div>
        <div className="mb-[20px]">
          <img src={logo} alt="" />
        </div>

        <div className="font-raleway  text-center text-[16px] font-medium leading-[76.69%] text-[#FFFFFF]">
          {title}
        </div>
      </div>
    </Link>
  )
}
