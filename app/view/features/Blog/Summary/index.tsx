interface IProps {
  points: string[];
}

const bullet = () => {
  return (
    <svg
      viewBox="0 0 500 500"
      className="flex-shrink-0 rotate-90"
      height={30}
      width={30}
    >
      <polygon points="250,60 100,400 400,400" fill="rgb(83,75,244)" />
    </svg>
  );
};

export default function Summary({ points }: IProps) {
  return (
    <div className="rounded-md p-5">
      <h4 className="font-sans tracking-wide text-gray-900">Summary</h4>
      {points.map((ele) => (
        <div key={ele} className="mt-3 flex flex-row items-center gap-3">
          {bullet()}
          {ele}
        </div>
      ))}
    </div>
  );
}
