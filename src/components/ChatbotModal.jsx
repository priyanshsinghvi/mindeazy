import React from 'react';
import Chatbot from './Chatbot';

const ChatbotModal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] shadow-2xl rounded-2xl overflow-hidden transition-all transform">
      <Chatbot />
    </div>
  );
};

export default ChatbotModal;