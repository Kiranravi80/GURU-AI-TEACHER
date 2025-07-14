// File: frontend/pages/signin.js
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SignIn() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace this
        callback: (res) => {
          console.log('Google login success:', res);
          window.location.href = '/dashboard';
        },
      });
      window.google.accounts.id.renderButton(
        document.getElementById('googleSignIn'),
        { theme: 'outline', size: 'large' }
      );
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sign In - GURU</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#1e1e1e] px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="GURU Logo" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-green-600">GURU</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Guided Understanding & Research Utility</p>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Sign in to your account</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = '/dashboard';
            }}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-900 dark:text-gray-100"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-900 dark:text-gray-100"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
            >
              Sign In
            </button>
          </form>

          <div id="googleSignIn" className="mt-4"></div>

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
