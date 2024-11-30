"use client";
import React, { useState } from 'react';
import { mockChatMessages } from '@/lib/mock-data';

const GroupChat = () => {
  const [message, setMessage] = useState('');
  const [chatStatus, setChatStatus] = useState<'pending' | 'active'>('pending');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Group Chat</h2>
          {chatStatus === 'pending' && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Pending Activation
            </span>
          )}
        </div>
      </div>

      {chatStatus === 'pending' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-clock text-2xl text-yellow-600"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Chat Activation Pending</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Your chat access is currently under review. You'll be notified once an admin activates your account.
          </p>
        </div>
      ) : (
        <>
          {/* Chat Messages */}
          <div className="bg-gray-50 rounded-lg p-4 h-[600px] overflow-y-auto mb-4 space-y-4">
            {mockChatMessages.map((msg) => (
              <div key={msg.message_id} className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className="fa-regular fa-user text-purple-900"></i>
                </div>
                <div className="flex-1 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-medium text-sm">{msg.username}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{msg.message_content}</p>
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
        </>
      )}
    </div>
  );
};

export default GroupChat; 