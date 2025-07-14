import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Ask me anything about your uploaded materials.' },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Sorry, something went wrong.' },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
            title="Chat with GURU"
          >
            💬
          </button>
        ) : (
          <div className="w-80 h-96 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <span className="font-semibold text-sm text-gray-700 dark:text-gray-200">GURU Chat</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 text-lg font-bold"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-md max-w-[90%] ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-green-600 text-white'
                      : 'mr-auto bg-gray-300 dark:bg-gray-700 text-black dark:text-white'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="mr-auto text-xs text-gray-400">GURU is typing...</div>
              )}
            </div>

            {/* Input Box */}
            <div className="p-2 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="w-full px-3 py-2 text-sm border rounded dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
