"use client";
import React from 'react';
import { mockAnalytics } from '@/lib/mock-data';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', trades: 245, success: 82 },
    { month: 'Feb', trades: 356, success: 75 },
    { month: 'Mar', trades: 478, success: 88 },
    // Add more months as needed
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Platform Analytics</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-2xl font-semibold">{mockAnalytics.platform_stats.total_users}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-users text-purple-900"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i>
            <span className="text-sm">{mockAnalytics.monthly_stats.users_growth}% growth</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Monthly Trades</p>
              <p className="text-2xl font-semibold">{mockAnalytics.monthly_stats.trade_volume}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-chart-line text-blue-600"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i>
            <span className="text-sm">+15% vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Success Rate</p>
              <p className="text-2xl font-semibold">{mockAnalytics.monthly_stats.success_rate}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-check text-green-600"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i>
            <span className="text-sm">+3.2% improvement</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Total Profit</p>
              <p className="text-2xl font-semibold">${(mockAnalytics.platform_stats.total_profit / 1000).toFixed(1)}k</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-dollar-sign text-yellow-600"></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i>
            <span className="text-sm">+8.4% vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Monthly Performance</h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Monthly Performance Chart Coming Soon</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Success Rate Trend</h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Success Rate Chart Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Monthly Data Table */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Monthly Statistics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Trades</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Success Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trend</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {monthlyData.map((data) => (
                <tr key={data.month}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.trades}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.success}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-green-600">
                      <i className="fa-solid fa-arrow-trend-up mr-1"></i>
                      +{Math.floor(Math.random() * 10)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 