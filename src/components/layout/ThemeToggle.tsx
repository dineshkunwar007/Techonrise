import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('techonrise_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('techonrise_theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="w-11 h-11 flex items-center justify-center rounded-xl text-muted hover:text-main hover:bg-[var(--surface-2)] transition-colors border border-transparent hover:border-subtle cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#E7B65C] transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#0F766E] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
