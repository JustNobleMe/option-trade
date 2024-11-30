"use client";
import React from 'react';
import '../globals.css';
import DashboardLayout from '@/components/dashboard/layout';
import UserDashboard from '@/components/dashboard/user/dashboard';
import AdminDashboard from '@/components/dashboard/admin/dashboard';
import { mockUserData } from '@/lib/mock-data';
import { useAuth } from '@/lib/context/auth-context';

export default function DashboardPage() {
  const { userRole } = useAuth();

  return (
    <DashboardLayout>
      {userRole === 'user' ? (
        <UserDashboard userData={mockUserData} />
      ) : (
        <AdminDashboard />
      )}
    </DashboardLayout>
  );
} 