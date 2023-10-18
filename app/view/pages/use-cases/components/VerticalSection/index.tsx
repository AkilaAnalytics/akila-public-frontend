export default function VerticalSection({ title, text }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 lg:flex-row lg:items-start">
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-10">
        <p className="text-lg">{text}</p>
      </div>
    </div>
  )
}
