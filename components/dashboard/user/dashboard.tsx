"use client";
import React from 'react';
import TradeStats from './trade-stats';
import TradeHistory from './trade-history';
import ChatSection from './chat-section';
import Notifications from './notifications';
import { User } from '@/lib/mock-data';

interface UserDashboardProps {
  userData: User;
}

const UserDashboard = ({ userData }: UserDashboardProps) => {
  return (
    <div className="space-y-6">
      {/* Profile Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <i className="fa-regular fa-user text-2xl text-purple-900"></i>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{userData.username}</h2>
                <p className="text-gray-500">{userData.email}</p>
                <p className="text-sm text-gray-400">Member since {new Date(userData.joined_date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-semibold text-green-600">{userData.trade_stats.success_rate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Trades</span>
                <span className="font-semibold">{userData.trade_stats.total_trades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wins/Losses</span>
                <span className="font-semibold">
                  <span className="text-green-600">{userData.trade_stats.wins}</span>
                  {" / "}
                  <span className="text-red-600">{userData.trade_stats.losses}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TradeStats />
          <TradeHistory />
        </div>
        <div className="space-y-6">
          <Notifications />
          <ChatSection />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 