// File: frontend/components/ThemeToggle.js
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.theme;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === 'dark' || (!stored && systemDark);

    document.documentElement.classList.toggle('dark', isDark);
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.theme = isDark ? 'dark' : 'light';
    setDarkMode(isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      title="Toggle Theme"
      className="text-xl"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
}
