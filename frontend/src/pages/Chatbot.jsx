import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function trimThinkSection(text) {
  // This regex removes anything between <think> and </think>, including the tags themselves
  return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
}

const Chatbot = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am your medical assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    try {
      const res = await axios.post('/api/chatbot', { message: input });
      const botReply = res.data.reply || 'Sorry, I could not understand.';
      const cleanedReply = trimThinkSection(botReply);
      setMessages(prev => [...prev, { from: 'bot', text: cleanedReply }]);
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Sorry, there was an error contacting the AI.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-4 bg-blue-50 min-h-[60vh] flex flex-col items-center">
      <div className="bg-white p-8 rounded shadow max-w-lg w-full flex flex-col" style={{ minHeight: 500 }}>
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Medical Chatbot</h2>
        <div className="flex-1 overflow-y-auto mb-4 bg-blue-50 rounded p-4" style={{ maxHeight: 300 }}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`} >
              <span className={`inline-block px-4 py-2 rounded-lg ${msg.from === 'user' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-900'}`}>{msg.text}</span>
            </div>
          ))}
          {loading && (
            <div className="mb-2 flex justify-start">
              <span className="inline-block px-4 py-2 rounded-lg bg-blue-200 text-blue-900">Thinking...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            className="flex-1 border border-blue-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" disabled={loading}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Chatbot; 