"use client";
import React from 'react';

const brokers = [
  {
    id: 1,
    name: "IC Markets",
    logo: "/brokers/ic-markets.png", // You'll need to add these images
    status: "connected",
    platforms: ["MT4", "MT5"],
    accountType: "Live"
  },
  {
    id: 2,
    name: "FTMO",
    logo: "/brokers/ftmo.png",
    status: "disconnected",
    platforms: ["MT4", "MT5", "cTrader"],
    accountType: "Challenge"
  }
];

const BrokerIntegration = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Broker Integration</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {brokers.map((broker) => (
          <div key={broker.id} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-building-columns text-2xl text-purple-900"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{broker.name}</h3>
                  <p className="text-sm text-gray-500">{broker.accountType}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                broker.status === 'connected' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {broker.status.charAt(0).toUpperCase() + broker.status.slice(1)}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Supported Platforms:</p>
              <div className="flex flex-wrap gap-2">
                {broker.platforms.map((platform) => (
                  <span key={platform} className="px-2 py-1 bg-purple-50 text-purple-900 rounded text-sm">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className={`px-4 py-2 rounded-lg text-sm ${
                broker.status === 'connected'
                  ? 'text-red-600 hover:bg-red-50'
                  : 'bg-purple-900 text-white hover:bg-purple-700'
              }`}>
                {broker.status === 'connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="flex items-center space-x-2 text-purple-900 hover:text-purple-700">
          <i className="fa-solid fa-plus"></i>
          <span>Add New Broker</span>
        </button>
      </div>
    </div>
  );
};

export default BrokerIntegration; 