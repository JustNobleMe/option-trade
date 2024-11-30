import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import RoleManagement from '@/components/dashboard/admin/role-management';

export default function RolesPage() {
  return (
    <DashboardLayout>
      <RoleManagement />
    </DashboardLayout>
  );
} 