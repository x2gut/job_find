import { IoMdClose } from "react-icons/io";

interface TagProps {
  label: string;
  onCloseClick: () => void;
}

const Tag: React.FC<TagProps> = ({ label, onCloseClick }) => {
  return (
    <div className="text-[#474C54] text-sm py-[6px] bg-gray-50 pl-[16px] gap-3 rounded-full flex items-center">
      {label}
      <button onClick={onCloseClick} className="p-[7px] bg-white rounded-full mr-[6px]">
        <IoMdClose />
      </button>
    </div>
  );
};

export default Tag;
