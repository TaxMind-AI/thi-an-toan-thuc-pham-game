import React from 'react';

interface FeedbackModalProps {
  message: string;
  onClose: () => void;
}

export const FeedbackModal = ({ message, onClose }: FeedbackModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center">
        <p className="text-xl mb-4">{message}</p>
        <button 
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Đã hiểu
        </button>
      </div>
    </div>
  );
};
