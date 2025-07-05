interface Props {
  title: string
  subTitle: string
  keyPoints: Array<any>
}

export default function KeyPoints({ title, subTitle, keyPoints }: Props) {
  return (
    <div className="flex flex-col space-y-8 p-16 sm:px-32">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl md:font-medium">
        {title}
      </h1>
      <p className="text-md text-white md:text-lg">{subTitle}</p>

      <div className="flex flex-col justify-center gap-8 rounded-md bg-secondaryBackground p-8 md:grid md:grid-cols-2 md:gap-24 md:p-12 md:px-16">
        {keyPoints.map((keyPoint: any, index: number) => (
          <div
            key={keyPoint.title + index}
            className="flex max-w-md flex-col space-y-3">
            <img
              src={keyPoint.image}
              className="h-16 w-16 object-contain"
              alt="Banner"
            />
            <h4 className="text-2xl font-semibold text-white">
              {keyPoint.title}
            </h4>
            <p className="text-md text-white">{keyPoint.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
