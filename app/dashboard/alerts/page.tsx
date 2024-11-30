import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import TradeAlerts from '@/components/dashboard/alerts/trade-alerts';

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <TradeAlerts />
    </DashboardLayout>
  );
} 