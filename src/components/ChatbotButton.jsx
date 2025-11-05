import React from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all transform hover:scale-110 ${
        isOpen ? 'bg-[#1D3557]' : 'bg-[#457B9D]'
      }`}
    >
      {isOpen ? (
        <X className="w-6 h-6 text-white" />
      ) : (
        <MessageCircle className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default ChatbotButton;