import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import GroupChat from '@/components/dashboard/chat/group-chat';

export default function ChatPage() {
  return (
    <DashboardLayout>
      <GroupChat />
    </DashboardLayout>
  );
} 