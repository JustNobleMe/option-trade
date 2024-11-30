"use client";
import React from 'react';
import Link from 'next/link';

const TradeManagement = () => {
  const trades = [
    {
      id: 1,
      type: "Forex",
      pair: "EUR/USD",
      status: "active",
      posted: "2024-02-21",
      success_rate: "78%"
    },
    {
      id: 2,
      type: "Crypto",
      pair: "BTC/USD",
      status: "completed",
      posted: "2024-02-20",
      success_rate: "82%"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Trade Management</h3>
        <Link 
          href="/dashboard/trades/new"
          className="px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Post New Trade
        </Link>
      </div>

      <div className="space-y-4">
        {trades.map((trade) => (
          <div key={trade.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{trade.pair}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    trade.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {trade.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Type: {trade.type}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Success Rate</p>
                <p className="font-medium text-green-600">{trade.success_rate}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-3 py-1 text-sm text-purple-900 hover:bg-purple-50 rounded">
                Edit
              </button>
              <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeManagement; 