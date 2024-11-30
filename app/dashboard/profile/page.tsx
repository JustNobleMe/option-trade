import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import UserProfile from '@/components/dashboard/profile/user-profile';

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <UserProfile />
    </DashboardLayout>
  );
} 