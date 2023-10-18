interface Props {
  title: string
  subTitle: string
}

export default function Hero({ title, subTitle }: Props) {
  return (
    <div className="space-y-4 tracking-wider text-center mt-24 mb-12">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
        {title}
      </h1>
      <p className="text-md md:text-lg text-white">{subTitle}</p>

      <div className="w-14 h-1 bg-gradient-to-r from-linkText to-primary m-auto" />
    </div>
  )
}
