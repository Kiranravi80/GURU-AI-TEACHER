// File: frontend/pages/signup.js
import { useRouter } from 'next/router';

export default function SignUp() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard'); // TODO: Add real registration logic
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full p-8">
        <div className="flex items-center mb-6">
          <img src="/logo.png" className="h-10 w-10 rounded-full mr-3" alt="GURU logo" />
          <div>
            <h1 className="text-xl font-bold text-green-600">GURU</h1>
            <p className="text-xs text-gray-400">Guided Understanding & Research Utility</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a href="/signin" className="text-green-600 hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
