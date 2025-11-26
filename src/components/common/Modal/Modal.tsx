import type { ModalProps } from "./Modal.types";

const Modal = ({ open, title, children, onClose }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[95%] max-w-md rounded-xl shadow-lg p-5 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
