//source: https://tailwindui.com/components/application-ui/overlays/modals
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { redX } from "~/view/assets";

// /source: https://tailwindui.com/components/application-ui/overlays/modals
interface Props {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
  height?: string;
  zIndex?: number;
  background?: string;
}

export default function Modal({
  children,
  openModal,
  setOpenModal,
  width = "w-full",
  height = "h-auto",
  zIndex = 999,
  background = "bg-background",
}: Props) {
  // Use a ref to store the modal container
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    };

    // Add event listener when modal is open
    if (openModal) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Clean up event listener when component unmounts or modal closes
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, setOpenModal]);

  // Focus the modal when it opens
  useEffect(() => {
    if (openModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [openModal]);
  if (!openModal) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500/80"
      style={{ zIndex }}
      onClick={() => setOpenModal(false)} // Close when backdrop clicked
      role="dialog"
      data-testid="modal-backdrop"
    >
      <div
        className={`${background} overflow-yscroll w-full overflow-x-scroll rounded-md p-6 md:max-w-[80vw] md:${width} max-h-[80vh] md:${height} relative`}
        onClick={(e) => e.stopPropagation()} // Prevent click bubbling
        data-testid="modal-container"
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 z-50 cursor-pointer text-gray-500 hover:text-gray-800"
          onClick={() => setOpenModal(false)}
          data-testid="close-button"
        >
          <img
            src={redX}
            alt="X"
            className="h-5 w-auto rounded-md hover:scale-120"
          />
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}
