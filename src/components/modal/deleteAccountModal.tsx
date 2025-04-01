import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../../api/user";
import useUserDataStore from "../../stores/userDataStore";
import Modal from "../ui/modal/modal";
import ModalHeader from "../ui/modal/modalHeader";
import { toast } from "react-toastify";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router-dom";

interface DeleteAccountModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { id, reset: resetUserData } = useUserDataStore();
  const { setIsAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      setIsAuthenticated(false);
      resetUserData();
      navigate("/");
      toast.warning("Your account was deleted");
    },
    onError: () => toast.error("Unexpected error occurred"),
  });

  const handleDelete = () => {
    if (id === null) {
      toast.error("User ID is missing. Cannot delete account.");
      return;
    }
    deleteUserMutation.mutate(id);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader title="Are you sure?" onClose={() => setIsOpen(false)} />
      <p className="text-sm pt-3 text-gray-900">
        This action cannot be undone. Do you really want to delete your account?
      </p>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 duration-200"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 duration-200"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
