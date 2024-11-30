"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';
import { mockUserData } from '@/lib/mock-data';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Define a type for navigation items
interface NavItem {
  icon: string;
  label: string;
  href: string;
  badge?: string;
  status?: string; // Add status as an optional property
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const { userRole } = useAuth();
  
  // User profile data based on role
  const profileData = userRole === 'admin' 
    ? {
        name: 'Admin User',
        email: 'admin@tradepro.com',
        avatar: 'A'
      }
    : {
        name: mockUserData.username,
        email: mockUserData.email,
        avatar: mockUserData.username.charAt(0)
      };

  const userNavItems: NavItem[] = [
    { 
      icon: "fa-solid fa-house", 
      label: "Dashboard", 
      href: "/dashboard" 
    },
    { 
      icon: "fa-solid fa-bell", 
      label: "Trade Alerts", 
      href: "/dashboard/alerts",
      badge: "3"
    },
    { 
      icon: "fa-solid fa-chart-line", 
      label: "Trade History", 
      href: "/dashboard/history" 
    },
    { 
      icon: "fa-solid fa-building-columns", 
      label: "Broker Integration", 
      href: "/dashboard/brokers" 
    },
    { 
      icon: "fa-solid fa-comments", 
      label: "Group Chat", 
      href: "/dashboard/chat",
      status: "pending"
    },
    { 
      icon: "fa-solid fa-user", 
      label: "Profile", 
      href: "/dashboard/profile" 
    },
    { 
      icon: "fa-solid fa-chart-pie", 
      label: "Analytics", 
      href: "/dashboard/analytics" 
    },
  ];

  const adminNavItems: NavItem[] = [
    { 
      icon: "fa-solid fa-gauge-high", 
      label: "Overview", 
      href: "/dashboard" 
    },
    { 
      icon: "fa-solid fa-users", 
      label: "User Management", 
      href: "/dashboard/users",
      badge: "New"
    },
    { 
      icon: "fa-solid fa-signal", 
      label: "Trade Management", 
      href: "/dashboard/trades" 
    },
    { 
      icon: "fa-solid fa-comments", 
      label: "Chat Management", 
      href: "/dashboard/chat-management",
      badge: "5"
    },
    { 
      icon: "fa-solid fa-message",
      label: "Group Chat", 
      href: "/dashboard/group-chat" 
    },
    { 
      icon: "fa-solid fa-chart-bar", 
      label: "Analytics", 
      href: "/dashboard/analytics" 
    },
    { 
      icon: "fa-solid fa-gear", 
      label: "Settings", 
      href: "/dashboard/settings" 
    },
    {
      icon: "fa-solid fa-shield-halved",
      label: "Role Management",
      href: "/dashboard/roles"
    }
  ];

  const navItems = userRole === 'admin' ? adminNavItems : userNavItems;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 w-64`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-6 py-5 border-b border-gray-200">
            <h1 className="text-2xl font-bold">Trade<span className="text-purple-900">Pro</span></h1>
            {userRole === 'admin' && (
              <span className="text-xs text-purple-900 font-semibold">Admin Panel</span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3 py-3 text-gray-700 rounded-lg hover:bg-purple-50 group ${
                  pathname === item.href ? 'bg-purple-50 text-purple-900' : ''
                }`}
              >
                <div className="flex items-center">
                  <i className={`${item.icon} w-6 h-6 transition duration-75 ${
                    pathname === item.href ? 'text-purple-900' : 'text-gray-500'
                  }`}></i>
                  <span className="ml-3">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-purple-900 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.status === 'pending' && (
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-900 font-semibold">
                  {profileData.avatar}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{profileData.name}</p>
                <p className="text-xs text-gray-500">{profileData.email}</p>
                <p className="text-xs text-purple-900">
                  {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'ml-64' : 'ml-0'} p-4 transition-margin duration-300`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm mb-6 rounded-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-600 relative">
                <i className="fa-regular fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="text-gray-500 hover:text-gray-600">
                <i className="fa-solid fa-gear text-xl"></i>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="bg-white rounded-lg shadow-sm p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 