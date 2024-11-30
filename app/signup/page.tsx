import React from 'react';
import '../globals.css';
import SignUpForm from '@/components/auth/signup-form';
import MainNav from '@/components/main-nav';

export default function SignUpPage() {
  return (
    <>
      <MainNav />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <SignUpForm />
        </div>
      </main>
    </>
  );
} 