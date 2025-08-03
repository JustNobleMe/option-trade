"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        {/* Logo/Brand */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Trade<span className="text-purple-900">Pro</span></h1>
          <p className="text-gray-600">Welcome back! Please login to your account.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:border-purple-900 transition duration-200"
                placeholder="Enter your email"
                required
              />
              <i className="fa-regular fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-purple-900"></i>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:border-purple-900 transition duration-200"
                placeholder="Enter your password"
                required
              />
              <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-purple-900"></i>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-purple-900 focus:ring-purple-900 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-purple-900 hover:text-purple-700 font-semibold transition duration-200">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-200 font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Social Login */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="flex justify-center items-center py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
              <i className="fa-brands fa-google text-xl text-gray-600"></i>
            </button>
            <button className="flex justify-center items-center py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
              <i className="fa-brands fa-facebook text-xl text-blue-600"></i>
            </button>
            <button className="flex justify-center items-center py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
              <i className="fa-brands fa-apple text-xl text-gray-800"></i>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          Create account?{' '}
          <Link href="/signup" className="text-purple-900 hover:text-purple-700 font-semibold transition duration-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm; 