import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import BrokerIntegration from '@/components/dashboard/brokers/broker-integration';

export default function BrokersPage() {
  return (
    <DashboardLayout>
      <BrokerIntegration />
    </DashboardLayout>
  );
} 