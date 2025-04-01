import React, { useEffect, useState } from "react";
import { TfiTrash } from "react-icons/tfi";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        animation ? "bg-black bg-opacity-60" : "bg-black bg-opacity-0"
      }`}
    >
      <div
        className={`bg-white p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 ${
          animation ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex items-center mb-4">
          <div className="bg-red-100 p-3 rounded-full mr-4">
            <TfiTrash size={36} color="black" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Confirm deletion</h2>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Are you sure you want to delete this application? This action cannot
          be undone.
        </p>

        <div className="flex justify-between">
          <button
            className="px-5 py-2 bg-gray-50 text-blue-500 rounded-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-red-500 text-gray-50 rounded-sm font-medium transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
