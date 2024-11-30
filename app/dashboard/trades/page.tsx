import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import TradeManagement from '@/components/dashboard/admin/trade-management';

export default function TradesPage() {
  return (
    <DashboardLayout>
      <TradeManagement />
    </DashboardLayout>
  );
} 