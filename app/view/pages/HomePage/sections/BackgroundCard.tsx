export default function FigmaCard({ children }) {
  return (
    <div
      className="absolute w-[700px] h-[520px] rounded-[20px] p-[2px]"
      style={{
        background: `
          radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(32, 33, 34, 0) 0%, #202122 100%),
          radial-gradient(97.09% 224.61% at 1.38% 96.94%, rgba(32, 33, 34, 0) 0%, #202122 100%),
          linear-gradient(114.55deg, rgba(0, 0, 0, 0.6) 2.13%, rgba(0, 0, 0, 0) 98.14%),
          radial-gradient(113.7% 136.37% at 89.79% 11.13%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%),
          linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
          `,
      }}
    >
      <div
        className={`
          h-full w-full
          rounded-[18px]   
          backdrop-blur-[42px]
        `}
        style={{}}
      >
        <div className="mt-10 ml-10">{children}</div>
      </div>
    </div>
  );
}
