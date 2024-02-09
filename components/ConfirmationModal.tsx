// ConfirmationModal.tsx
import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="text-center mb-1 mx-2 px-4">Are you sure you want to reset?</p>
        <p className="text-center mb-4 font-bold">All progress will be erased</p>
        <div className="flex justify-center gap-6">
          <button
            className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded w-20"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded w-20"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;