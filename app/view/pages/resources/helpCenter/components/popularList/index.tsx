export default function PopularList({ heading, listData, readMoreText }) {
  return (
    <div className="w-full w-full  sm:w-[50%]">
      <div className="mb-9">{heading}</div>
      <ul>
        {listData?.map((data, index) => (
          <li className="mb-4" key={index}>
            {data.description}
          </li>
        ))}
      </ul>
      <div className="text-[#1A73E8] underline">{readMoreText}</div>
    </div>
  )
}
