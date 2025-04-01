import { GoPlusCircle } from "react-icons/go";
import Dropdown from "../../ui/dropdown/dropdown";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { expireJob } from "../../../api/job";
import { toast } from "react-toastify";
import useUserDataStore from "../../../stores/userDataStore";
import { useNavigate } from "react-router-dom";

interface RecentlyPostedJobsCardDropdownProps {
  jobId: number;
  isOpen: boolean;
  onClose: () => void;
}

const RecentlyPostedJobsCardDropdown: React.FC<
  RecentlyPostedJobsCardDropdownProps
> = ({ isOpen, onClose, jobId }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const { id: userId } = useUserDataStore();

  const expireMutation = useMutation({
    mutationFn: expireJob,
    onSuccess: () => toast.warn("Job is expired now"),
  });

  return (
    <Dropdown
      onClose={onClose}
      className="right-0 -translate-x-1/5 translate-y-8 top-1/2"
    >
      <div className="flex flex-col">
        <button className="w-full flex gap-2 items-center text-left px-4 body-small-500 text-gray-400 py-[10px] hover:bg-blue-50 hover:text-blue-500">
          <GoPlusCircle size={20} />
          Promote Job
        </button>
        <button
          onClick={() => navigate(`/find-job/job-details/${jobId}`)}
          className="w-full flex gap-2 items-center text-left px-4 body-small-500 text-gray-400 py-[10px] hover:bg-blue-50 hover:text-blue-500"
        >
          <FiEye size={20} />
          View detail
        </button>
        <button
          onClick={() => {
            if (userId) {
              expireMutation.mutate({ jobId, userId });
            }
          }}
          className="w-full flex gap-2 items-center text-left px-4 body-small-500 text-gray-400 py-[10px] hover:bg-blue-50 hover:text-blue-500"
        >
          <IoIosCloseCircleOutline size={20} />
          Make it Expire
        </button>
      </div>
    </Dropdown>
  );
};

export default RecentlyPostedJobsCardDropdown;
