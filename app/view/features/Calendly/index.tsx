import { InlineWidget } from "react-calendly";
import { useAppContext } from "~/view/context";

export default function CalendlyModal() {
  const { showCalendly, toggleCalendly } = useAppContext();

  if (!showCalendly) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500/70 z-[999]"
      onClick={toggleCalendly}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-2">
          <button
            onClick={toggleCalendly}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
        <InlineWidget
          url="https://calendly.com/brandon-goldney/30min"
          styles={{ width: "100%", height: "700px", minWidth: "320px" }}
        />
      </div>
    </div>
  );
}
