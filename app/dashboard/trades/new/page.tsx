import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import NewTradeForm from '@/components/dashboard/admin/new-trade-form';

export default function NewTradePage() {
  return (
    <DashboardLayout>
      <NewTradeForm />
    </DashboardLayout>
  );
} 