import React, { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';
import { Send, Loader2 } from 'lucide-react';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm your mental wellness companion. How are you feeling today? I'm here to listen and help."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a compassionate mental wellness assistant. Provide supportive, empathetic responses focused on mental health and well-being. Keep responses concise and encouraging. Never provide medical advice, and always suggest professional help for serious concerns.'
          },
          ...messages,
          userMessage
        ],
      });

      const assistantMessage = {
        role: 'assistant',
        content: response.choices[0].message.content
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto bg-white/95 rounded-2xl shadow-lg border border-gray-100/70 backdrop-blur-sm">
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-5">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 md:p-5 rounded-2xl shadow-sm ${
                message.role === 'user'
                  ? 'bg-[#1D3557]/95 text-white backdrop-blur-sm'
                  : 'bg-[#F1FAEE]/90 text-[#1D3557] backdrop-blur-sm'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-2xl bg-[#F1FAEE]/90 shadow-sm backdrop-blur-sm">
              <Loader2 className="w-6 h-6 animate-spin text-[#1D3557]" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 md:p-5 border-t border-gray-200/70 bg-gray-50/90 backdrop-blur-sm rounded-b-2xl">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8DADC] shadow-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#1D3557] text-white p-2 rounded-lg hover:bg-[#457B9D] transition-colors disabled:opacity-50"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;