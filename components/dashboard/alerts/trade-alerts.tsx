"use client";
import React from 'react';

const TradeAlerts = () => {
  const alerts = [
    {
      id: 1,
      pair: "EUR/USD",
      type: "Buy",
      entry: "1.0950",
      sl: "1.0900",
      tp: "1.1000",
      time: "2024-02-21T10:30:00Z",
      status: "active"
    },
    {
      id: 2,
      pair: "GBP/JPY",
      type: "Sell",
      entry: "185.50",
      sl: "186.00",
      tp: "184.50",
      time: "2024-02-21T09:15:00Z",
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Trade Alerts</h2>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold">{alert.pair}</h3>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    alert.type === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {alert.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(alert.time).toLocaleString()}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                alert.status === 'active' ? 'bg-purple-100 text-purple-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Entry</p>
                <p className="font-semibold">{alert.entry}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Stop Loss</p>
                <p className="font-semibold text-red-600">{alert.sl}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Take Profit</p>
                <p className="font-semibold text-green-600">{alert.tp}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-4 py-2 text-sm text-purple-900 hover:bg-purple-50 rounded-lg transition-colors">
                View Details
              </button>
              <button className="px-4 py-2 text-sm bg-purple-900 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Take Trade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeAlerts; 