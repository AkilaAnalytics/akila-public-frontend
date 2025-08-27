import { HomePageBackground } from "~/view/assets";

export default function GridBackground() {
  return (
    <div>
      <img src={HomePageBackground} className="absolute h-full w-full" />
      {/* grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(128,128,128,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128,128,128,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "300px 200px",
          backgroundPosition: "0 0, 0 0",
        }}
      />

      {/* dots */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-white/5 rounded-full opacity-60" />
      <div className="absolute top-32 right-32 w-1 h-1 bg-white/5 rounded-full opacity-60" />
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-white/5 rounded-full opacity-60" />
      <div className="absolute bottom-40 right-20 w-1 h-1 bg-white/5 rounded-full opacity-60" />
      <div className="absolute bottom-32 left-16 w-1 h-1 bg-white/5 rounded-full opacity-60" />
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-white/5 rounded-full opacity-60" />
      <div className="absolute top-80 left-1/2 w-1 h-1 bg-white/5 rounded-full opacity-60" />

      {/* Connection lines */}
      <svg className="relative w-full h-full" style={{ pointerEvents: "none" }}>
        <line
          x1="80"
          y1="80"
          x2="200"
          y2="128"
          stroke="rgba(16,16,19)"
          strokeWidth="0.5"
        />
        <line
          x1="200"
          y1="128"
          x2="300"
          y2="240"
          stroke="rgba(16,16,19)"
          strokeWidth="0.5"
        />
        <line
          x1="80%"
          y1="160"
          x2="90%"
          y2="320"
          stroke="rgba(16,16,19)"
          strokeWidth="0.5"
        />
        <line
          x1="50%"
          y1="320"
          x2="60%"
          y2="80"
          stroke="rgba(16,16,19)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
