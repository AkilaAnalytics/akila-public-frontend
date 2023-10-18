import type { ReactNode } from 'react'

import ButtonBar from '~/view/components/ButtonsBar'

interface Props {
  image: string
  title?: string
  subTitle?: string
  buttons?: Array<any>
  superTitle?: string
  children?: ReactNode
}

export default function TalkToSalesBanner({
  title = '',
  subTitle = '',
  image,
  superTitle = '',
  buttons,
  children
}: Props) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${image})`
  }
  return (
    <div
      className="mb-[50px] flex min-h-[699px] items-center justify-center bg-cover bg-center p-2 py-4 "
      style={styles}>
      <div className="mt-[120px] grid  min-h-[579px] w-full max-w-[1110px] grid-cols-1 gap-[33px] md:grid-cols-2 ">
        <div className=" items flex items-center justify-center">
          <div className="min-h-[176px] max-w-[536px] ">
            <h4 className="font-raleway mb-[10px] text-center text-[20px] font-semibold leading-7 text-[#E7E7E7]">
              {superTitle}
            </h4>
            <h1 className="mb-[17px] text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              {title}
            </h1>
            <p className="text-md mb-10 text-center text-white md:text-lg">
              {subTitle}
            </p>
            {buttons && (
              <div className="flex justify-start space-x-4">
                <ButtonBar />
              </div>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
