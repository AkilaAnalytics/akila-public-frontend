interface Props {
  position: "left" | "right";
}

export default function GradientLine({ position = "left" }: Props) {
  const isLeft = position === "left";

  return (
    <div className="relative h-[1px] w-24 my-auto">
      {/* The gradient line */}
      <div
        className={`absolute inset-0 rounded-full ${
          isLeft
            ? "bg-gradient-to-r from-[#181A1E] to-[#888A8D]" // dark → bright
            : "bg-gradient-to-r from-[#888A8D] to-[#181A1E]" // bright → dark
        }`}
      ></div>

      {/* The square at the end */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        }`}
      >
        <div className="w-1 h-1 bg-[#888A8D] rounded-sm border border-[#181A1E]"></div>
      </div>
    </div>
  );
}
