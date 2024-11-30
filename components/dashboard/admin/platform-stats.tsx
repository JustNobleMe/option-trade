import React from 'react';
import { mockAnalytics } from '@/lib/mock-data';

const PlatformStats = () => {
  const stats = [
    {
      label: "Total Users",
      value: mockAnalytics.platform_stats.total_users,
      icon: "fa-solid fa-users",
      change: "+12%",
      color: "purple"
    },
    {
      label: "Active Users",
      value: mockAnalytics.platform_stats.active_users,
      icon: "fa-solid fa-user-check",
      change: "+8%",
      color: "green"
    },
    {
      label: "Total Trades",
      value: mockAnalytics.platform_stats.total_trades,
      icon: "fa-solid fa-chart-line",
      change: "+15%",
      color: "blue"
    },
    {
      label: "Success Rate",
      value: `${mockAnalytics.platform_stats.success_rate}%`,
      icon: "fa-solid fa-chart-pie",
      change: "+3%",
      color: "yellow"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center`}>
              <i className={`${stat.icon} text-${stat.color}-600`}></i>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <i className="fa-solid fa-arrow-trend-up mr-1"></i>
            <span className="text-sm">{stat.change} this month</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformStats; 