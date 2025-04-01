import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from "../../../../ui/modal/modal";
import DeleteAccountModal from "../../../../modal/deleteAccountModal";

const AccountClose = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mt-8 flex flex-col gap-3 max-w-[536px]">
      <h5 className="body-large-500">Delete Your Company</h5>
      <p className="body-small-400">
        If you delete your Jobpilot account, you will no longer be able to get
        information about the matched jobs, following employers, and job alert,
        shortlisted jobs and more. You will be abandoned from all the services
        of Jobpilot.com.
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="flex gap-1 items-center text-red-500 font-medium text-sm hover:underline"
      >
        <IoCloseCircleOutline size={24} />
        Close Account
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg pb-1 font-semibold border-b">Are you sure?</h2>
        <p className="text-sm pt-1 text-gray-600">
          This action cannot be undone. Do you really want to delete your
          account?
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Delete
          </button>
          <DeleteAccountModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </div>
  );
};

export default AccountClose;
