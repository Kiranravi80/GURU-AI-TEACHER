// File: frontend/components/Navbar.js
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="GURU Logo" className="w-10 h-10 rounded-full" />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-green-600">GURU</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Guided Understanding & Research Utility
              </p>
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Link href="/dashboard" className="hover:text-green-600 transition">Dashboard</Link>
            <Link href="/history" className="hover:text-green-600 transition">History</Link>
          </div>

          {/* Right: Theme Toggle + Logout */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => (window.location.href = '/signin')}
              className="text-sm text-green-600 hover:underline"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
