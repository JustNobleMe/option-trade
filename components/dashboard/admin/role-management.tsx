"use client";
import React, { useState } from 'react';

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string[];
  usersCount: number;
}

const RoleManagement = () => {
  const [roles] = useState<Role[]>([
    {
      id: 1,
      name: "Admin",
      description: "Full system access",
      permissions: ["all"],
      usersCount: 3
    },
    {
      id: 2,
      name: "Moderator",
      description: "Chat and user management",
      permissions: ["chat_manage", "user_view", "trade_view"],
      usersCount: 5
    },
    {
      id: 3,
      name: "User",
      description: "Standard user access",
      permissions: ["trade_view", "chat_participate"],
      usersCount: 156
    }
  ]);

  const [isAddingRole, setIsAddingRole] = useState(false);
  const [newRole, setNewRole] = useState({
    name: '',
    description: '',
    permissions: [] as string[]
  });

  const availablePermissions = [
    { id: 'user_manage', label: 'User Management' },
    { id: 'user_view', label: 'View Users' },
    { id: 'trade_manage', label: 'Trade Management' },
    { id: 'trade_view', label: 'View Trades' },
    { id: 'chat_manage', label: 'Chat Management' },
    { id: 'chat_participate', label: 'Chat Participation' },
    { id: 'analytics_view', label: 'View Analytics' }
  ];

  const handlePermissionToggle = (permission: string) => {
    setNewRole(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(p => p !== permission)
        : [...prev.permissions, permission]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Role Management</h2>
      </div>

      {/* Role List */}
      <div className="grid gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{role.name}</h3>
                <p className="text-gray-500">{role.description}</p>
              </div>
              <span className="text-sm text-gray-500">
                {role.usersCount} users
              </span>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Permissions:</h4>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="px-2 py-1 bg-purple-50 text-purple-900 rounded text-sm"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-3 py-1 text-sm text-purple-900 hover:bg-purple-50 rounded">
                Edit
              </button>
              {role.name !== 'Admin' && (
                <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Role Button */}
      {!isAddingRole ? (
        <button
          onClick={() => setIsAddingRole(true)}
          className="flex items-center space-x-2 text-purple-900 hover:text-purple-700"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Add New Role</span>
        </button>
      ) : (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Create New Role</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role Name
              </label>
              <input
                type="text"
                value={newRole.name}
                onChange={(e) => setNewRole({...newRole, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={newRole.description}
                onChange={(e) => setNewRole({...newRole, description: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Permissions
              </label>
              <div className="space-y-2">
                {availablePermissions.map((permission) => (
                  <label key={permission.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={newRole.permissions.includes(permission.id)}
                      onChange={() => handlePermissionToggle(permission.id)}
                      className="h-4 w-4 text-purple-900 focus:ring-purple-900 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{permission.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsAddingRole(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-700"
              >
                Create Role
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RoleManagement; 