import React from 'react';
import '../globals.css';
import LoginForm from '@/components/auth/login-form';
import MainNav from '@/components/main-nav';


export default function LoginPage() {
  return (
    <>
      <MainNav />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <LoginForm />
        </div>
      </main>
    </>
  );
} 