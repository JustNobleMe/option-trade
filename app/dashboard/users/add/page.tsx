import React from 'react';
import DashboardLayout from '@/components/dashboard/layout';
import AddUserForm from '@/components/dashboard/admin/add-user-form';

export default function AddUserPage() {
  return (
    <DashboardLayout>
      <AddUserForm />
    </DashboardLayout>
  );
} 