import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import TradeHistory from '@/components/dashboard/user/trade-history';

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <TradeHistory />
    </DashboardLayout>
  );
} 