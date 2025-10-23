import React from 'react';

interface IntroModalProps {
  onStart: () => void;
}

export const IntroModal: React.FC<IntroModalProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Chào mừng đến với Thám Tử Nhí!</h2>
        <p className="mb-6">Hãy cùng Thám Tử Gấu Trúc Đỏ tìm ra những thực phẩm không an toàn nhé!</p>
        <button 
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Bắt đầu!
        </button>
      </div>
    </div>
  );
};
