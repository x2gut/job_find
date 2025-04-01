import { IoMdClose } from "react-icons/io";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="sticky top-0 bg-white z-10 border-b-[1px] p-2 flex justify-between items-center">
      <h5 className="text-slate-600 font-bold text-lg">{title}</h5>
      <button
        className="p-1 rounded-md hover:bg-slate-100 duration-200"
        onClick={onClose}
      >
        <IoMdClose size={20} />
      </button>
    </div>
  );
};

export default ModalHeader;
