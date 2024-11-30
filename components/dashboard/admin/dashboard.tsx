"use client";
import React from 'react';
import PlatformStats from './platform-stats';
import UserManagement from './user-management';
import TradeManagement from './trade-management';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h2>
      </div>

      {/* Platform Overview Stats */}
      <PlatformStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserManagement />
        <TradeManagement />
      </div>
    </div>
  );
};

export default AdminDashboard; 