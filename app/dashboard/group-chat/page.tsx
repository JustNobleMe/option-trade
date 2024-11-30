import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import GroupChatManagement from '@/components/dashboard/admin/group-chat-management';

export default function GroupChatPage() {
  return (
    <DashboardLayout>
      <GroupChatManagement />
    </DashboardLayout>
  );
} 