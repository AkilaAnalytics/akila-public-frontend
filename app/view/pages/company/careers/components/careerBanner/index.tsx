interface Props {
  image: string
  title?: string
}

export default function CareerBanner({ title = '', image }: Props) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${image})`
  }
  return (
    <div
      className="mb-[50px] flex h-[345px] flex-col justify-center bg-cover bg-center"
      style={styles}>
      <div className=" flex justify-center ">
        <h1 className="font-raleway max-w-[950px] text-center text-[42px] font-semibold leading-[48px] text-[#E7E7E7]">
          {title}
        </h1>
      </div>
    </div>
  )
}
