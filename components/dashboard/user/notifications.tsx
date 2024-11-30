"use client";
import React from 'react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'trade',
      message: 'New trade alert: EUR/USD setup',
      time: '5 minutes ago',
      icon: 'fa-solid fa-chart-line',
      read: false,
    },
    {
      id: 2,
      type: 'system',
      message: 'System maintenance scheduled',
      time: '1 hour ago',
      icon: 'fa-solid fa-gear',
      read: true,
    },
    // Add more notifications as needed
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start space-x-3 p-3 rounded-lg ${
              notification.read ? 'bg-white' : 'bg-purple-50'
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <i className={`${notification.icon} text-purple-900`}></i>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{notification.message}</p>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            {!notification.read && (
              <div className="w-2 h-2 rounded-full bg-purple-900"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications; 