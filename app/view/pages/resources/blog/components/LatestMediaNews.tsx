export default function LatestMediaNews({ heading, children }) {
  return (
    <div className="container_class  ">
      <div className="mt-[100px] ">
        <div className="mb-6 text-3xl"> {heading}</div>
        {children}
      </div>
    </div>
  )
}
