"use client";
import React, { useState } from 'react';
import { mockChatMessages } from '@/lib/mock-data';

interface ChatMessage {
  message_id: string;
  user_id: string;
  username: string;
  timestamp: string;
  message_content: string;
  isAdmin?: boolean;
}

const GroupChatManagement = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    ...mockChatMessages,
    {
      message_id: "m2",
      user_id: "admin1",
      username: "Admin",
      timestamp: new Date().toISOString(),
      message_content: "Welcome to the trading group!",
      isAdmin: true
    }
  ]);

  const [chatSettings, setChatSettings] = useState({
    allowUserMessages: true,
    slowMode: false,
    slowModeInterval: 60, // seconds
    profanityFilter: true,
    membersOnly: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: ChatMessage = {
      message_id: `m${Date.now()}`,
      user_id: "admin1",
      username: "Admin",
      timestamp: new Date().toISOString(),
      message_content: message,
      isAdmin: true
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
  };

  const handleDeleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.message_id !== messageId));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Group Chat Management</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Window */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold">Live Chat</h3>
          </div>
          
          {/* Messages */}
          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.message_id} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.isAdmin ? 'bg-purple-100' : 'bg-gray-100'
                }`}>
                  <i className={`fa-regular fa-user ${
                    msg.isAdmin ? 'text-purple-900' : 'text-gray-600'
                  }`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`font-medium text-sm ${
                        msg.isAdmin ? 'text-purple-900' : 'text-gray-900'
                      }`}>
                        {msg.username}
                      </span>
                      {msg.isAdmin && (
                        <span className="px-2 py-0.5 text-xs bg-purple-100 text-purple-900 rounded-full">
                          Admin
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handlePinMessage(msg.message_id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <i className="fa-solid fa-thumbtack"></i>
                      </button>
                      <button 
                        onClick={() => handleDeleteMessage(msg.message_id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{msg.message_content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
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
            </div>
          </form>
        </div>

        {/* Chat Settings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <h3 className="font-semibold">Chat Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Allow User Messages</h4>
                <p className="text-sm text-gray-500">Let users send messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={chatSettings.allowUserMessages}
                  onChange={(e) => setChatSettings({...chatSettings, allowUserMessages: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-900"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Slow Mode</h4>
                <p className="text-sm text-gray-500">Limit message frequency</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={chatSettings.slowMode}
                  onChange={(e) => setChatSettings({...chatSettings, slowMode: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-900"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Profanity Filter</h4>
                <p className="text-sm text-gray-500">Filter inappropriate content</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={chatSettings.profanityFilter}
                  onChange={(e) => setChatSettings({...chatSettings, profanityFilter: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-900"></div>
              </label>
            </div>

            {chatSettings.slowMode && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slow Mode Interval (seconds)
                </label>
                <input
                  type="number"
                  value={chatSettings.slowModeInterval}
                  onChange={(e) => setChatSettings({...chatSettings, slowModeInterval: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                  min="5"
                  max="300"
                />
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button className="w-full px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-700 transition duration-200">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChatManagement; 