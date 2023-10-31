interface Props {
  title: string
  subTitle: string
}

export default function Hero({ title, subTitle }: Props) {
  return (
    <div className="mb-12 mt-24 space-y-4 text-center tracking-wider">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">
        {title}
      </h1>
      <p className="text-md text-white md:text-lg">{subTitle}</p>

      <div className="bg-gradient-to-r m-auto h-1 w-14 from-linkText to-turqoise" />
    </div>
  )
}
