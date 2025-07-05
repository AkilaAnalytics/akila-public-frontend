import Button from '../Button'

interface Props {
  heading?: string
  changeOrder?: boolean
  description?: string
  img?: string
  buttonText?: Boolean
}
export default function DescriptionImageComponent({
  heading,
  changeOrder,
  description,
  img,
  buttonText
}: Props) {
  return (
    <div className="mx-auto my-[50px] max-w-[1266px]">
      <div className=" grid grid-cols-1 justify-items-center gap-4 p-2 sm:grid-cols-2 ">
        <div
          className={` flex max-w-[471px] flex-col justify-center ${
            changeOrder ? 'order-2' : 'order-1'
          }`}
        >
          <div className="mb-[24px] font-sans text-[32px] font-semibold leading-[40px] text-[#e3e3e3] sm:text-[40px] sm:leading-[45px]">
            {heading}
          </div>
          <p className="font-sans text-[14px] leading-[25px] text-[#e7e7e7] sm:text-lg">
            {description}
          </p>
          {buttonText ? (
            <div className="mt-[24px]">
              <Button text={buttonText} background />
            </div>
          ) : (
            ''
          )}
        </div>
        <div
          className={`h-[350px] max-w-[570px] sm:h-[378px] ${
            changeOrder ? 'order-1' : 'order-2'
          }`}
        >
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
