import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Loader2 } from 'lucide-react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

const ChatbotPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Welcome to MindfulSpace! I'm here to support your mental wellness journey. How are you feeling today?"
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
    <div className="min-h-screen bg-gradient-to-br from-[#A8DADC] via-[#D5C6E0] to-[#F1FAEE]">
      <header className="bg-white/80 backdrop-blur-md shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-[#1D3557] hover:text-[#457B9D] transition-colors"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Back to Home
            </button>
            <h1 className="text-xl font-semibold text-[#1D3557] ml-4">MindfulSpace Chat</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-[#1D3557] text-white'
                        : 'bg-[#F1FAEE] text-[#1D3557]'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-2xl bg-[#F1FAEE]">
                    <Loader2 className="w-6 h-6 animate-spin text-[#1D3557]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
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
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;