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
      className="fixed inset-0 flex items-center justify-center  bg-black/50  z-50"
      onClick={onClose}
    >
      <div
        className="bg-white pt-8 p-6 rounded-lg shadow-lg w-[850px] relative mx-7 lg:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-1 right-3 text-2xl text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <div className="overflow-y-auto max-h-[80vh] md:max-h-[88vh] mr-[-10px] pr-[8px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
