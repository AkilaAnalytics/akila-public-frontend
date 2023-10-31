import { RightArrow } from '~/view/assets'

interface Props {
  title: string
  workflows: Array<any>
}

export default function Workflow({ title, workflows }: Props) {
  return (
    <div className="flex flex-col space-y-8 p-5 md:px-32">
      <h1 className=" text-2xl font-semibold text-white sm:text-3xl md:text-5xl md:font-medium">
        {title}
      </h1>

      <div className="flex flex-col justify-center gap-8 rounded-md bg-secondaryBackground p-8 md:grid md:grid-cols-3 md:gap-24 md:p-12 md:px-16">
        {workflows.map((workflow: any) => (
          <div key={workflow.title} className="flex flex-row space-x-8">
            <div className="flex max-w-md flex-col ">
              <img
                src={workflow.image}
                className="mb-[36px] h-16 w-16 object-contain"
                alt="Banner"
              />
              <div className="mb-[24px] line-clamp-5   text-2xl font-semibold text-white">
                {workflow.title}
              </div>
              <p className="text-mdtext-white">{workflow.subTitle}</p>
            </div>

            <div className="my-auto  flex justify-center">
              <img
                src={RightArrow}
                className="hidden h-96 w-96 object-contain md:inline-block"
                alt="Banner"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
