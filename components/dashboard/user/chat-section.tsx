"use client";
import React, { useState } from 'react';
import { mockChatMessages } from '@/lib/mock-data';

const ChatSection = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Group Chat</h3>
      
      {/* Chat Messages */}
      <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
        {mockChatMessages.map((msg) => (
          <div key={msg.message_id} className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <i className="fa-regular fa-user text-purple-900"></i>
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-medium text-sm">{msg.username}</span>
                <span className="text-xs text-gray-500">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm text-gray-700">{msg.message_content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatSection; 