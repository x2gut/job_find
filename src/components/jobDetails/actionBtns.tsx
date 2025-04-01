import { CiBookmark } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import clsx from "clsx";
import useUserDataStore from "../../stores/userDataStore";

interface ActionButtonsProps {
  expireIn: number;
  setIsModalOpen: (value: boolean) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ expireIn, setIsModalOpen }) => {
  const { accType } = useUserDataStore();
  const isExpired = expireIn === 0;
  const isDisabled = isExpired || accType !== "candidate";

  return (
    <div>
      <div className="flex gap-3">
        <button className="p-4 bg-gray-50 rounded-md hover:bg-gray-100 duration-300">
          <CiBookmark size={24} color="#0A65CC" />
        </button>
        <button
          onClick={() => !isDisabled && setIsModalOpen(true)}
          disabled={isDisabled}
          className={clsx(
            "flex gap-3 items-center text-white rounded-md py-4 px-16 duration-300",
            {
              "bg-gray-400 cursor-not-allowed": isDisabled,
              "bg-blue-500 hover:bg-blue-600": !isDisabled,
            }
          )}
        >
          Apply Now
          <BsArrowRight color="#FFF" size={24} />
        </button>
      </div>
      <p className="mt-3 body-small-400 text-end">
        Job expires in:{" "}
        <span className="text-red-500">
          {isExpired ? "expired" : `${expireIn} days`}
        </span>
      </p>
    </div>
  );
};

export default ActionButtons;
