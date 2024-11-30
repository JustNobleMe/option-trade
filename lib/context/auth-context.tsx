"use client";
import React, { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  userRole: 'admin' | 'user';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children, userRole }: { children: ReactNode; userRole: 'admin' | 'user' }) {
  return (
    <AuthContext.Provider value={{ userRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 