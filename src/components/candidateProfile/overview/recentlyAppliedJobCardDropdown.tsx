import { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import Dropdown from "../../ui/dropdown/dropdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteJobApplicationById } from "../../../api/jobApplication";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "../../modal/deleteConfirmationModal";

interface RecentlyAppliedJobCardDropdownProps {
  isVisible: boolean;
  jobId: number;
  applicationId: number;
  onClose: () => void;
}

const RecentlyAppliedJobCardDropdown: React.FC<
  RecentlyAppliedJobCardDropdownProps
> = ({ isVisible, jobId, applicationId, onClose }) => {
  if (!isVisible) return;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteJobApplicationById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobApplications"] });
      toast.success("Application deleted successfully!");
      onClose();
      setIsModalOpen(false);
    },
    onError: (error) => {
      toast.error(`Error: ${error.message || "Failed to delete application"}`);
    },
  });

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    mutation.mutate({ jobId, applicationId });
  };

  return (
    <>
      <Dropdown
        onClose={isModalOpen ? () => {} : onClose}
        className="right-0 -translate-x-1/5 translate-y-8 0 top-1/2"
      >
        <ul>
          <li className="text-gray-600 text-sm font-medium px-2 py-5 hover:bg-blue-50 hover:text-blue-500 duration-200">
            <button
              className="flex gap-2 items-center whitespace-nowrap"
              onClick={handleDelete}
              disabled={mutation.isPending}
            >
              <IoMdRemoveCircleOutline size={20} />
              {mutation.isPending ? "Deleting..." : "Delete application"}
            </button>
          </li>
        </ul>
      </Dropdown>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default RecentlyAppliedJobCardDropdown;
