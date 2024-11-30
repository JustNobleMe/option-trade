import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import ChatManagement from '@/components/dashboard/admin/chat-management';

export default function ChatManagementPage() {
  return (
    <DashboardLayout>
      <ChatManagement />
    </DashboardLayout>
  );
} 