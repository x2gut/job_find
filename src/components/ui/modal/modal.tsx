import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      id="modal"
      onClick={onClose}
      className="h-screen w-screen fixed inset-0 bg-black/30 flex justify-center items-center z-20"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white py-2 px-6 rounded-lg shadow-lg relative"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
