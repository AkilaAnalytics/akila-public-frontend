import ButtonBar from '~/view/components/ButtonsBar'
interface Props {
  image: string
  title?: string
  subTitle?: string
  buttons?: Array<any>
  superTitle?: string
}

export default function HomeBanner({
  title = '',
  subTitle = '',
  image,
  superTitle = '',
  buttons
}: Props) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${image})`
  }
  return (
    <div
      className=" flex min-h-[813px] flex-col justify-center bg-cover bg-center p-3"
      style={styles}>
      <div className="max-w-[522px] sm:pl-[164px]">
        <h4 className="font-raleway mb-[10px] text-[20px] font-semibold leading-7 text-[#E7E7E7]">
          {superTitle}
        </h4>
        <h1 className="mb-[17px] text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          {title}
        </h1>
        <p className="text-md mb-10 text-white md:text-lg">{subTitle}</p>
        {buttons && (
          <div className="flex justify-start space-x-4">
            <ButtonBar />
          </div>
        )}
      </div>
    </div>
  )
}
