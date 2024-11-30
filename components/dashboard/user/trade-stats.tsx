"use client";
import React from 'react';
import { mockTrades } from '@/lib/mock-data';

const TradeStats = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Trade Performance</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Win/Loss Chart */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Win/Loss Ratio</h4>
          {/* Placeholder for chart - you can integrate a chart library here */}
          <div className="h-48 flex items-center justify-center">
            <p className="text-gray-500">Chart Coming Soon</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Monthly Performance</h4>
          <div className="h-48 flex items-center justify-center">
            <p className="text-gray-500">Performance Graph Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeStats; 