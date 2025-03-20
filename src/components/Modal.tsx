import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center  bg-black/50 z-100 "
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[850px] relative max-h-[80vh] md:max-h-[93vh] mx-7 lg:mx-0 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
