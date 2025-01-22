import React, { useEffect, useState } from 'react';
import { Search, Grid, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for the initial theme
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    // Apply the appropriate theme class to the document's body
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="h-0.5 w-6 bg-gray-600 dark:bg-gray-400"></div>
              <div className="h-0.5 w-6 bg-gray-600 dark:bg-gray-400"></div>
              <div className="h-0.5 w-6 bg-gray-600 dark:bg-gray-400"></div>
            </div>
          </button>
          <div className="flex items-center text-green-600 dark:text-green-400">
            <span className="text-2xl font-bold">Todo</span>
            <span className="text-2xl">List</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-500 dark:text-gray-300" />
          <Grid className="w-5 h-5 text-gray-500 dark:text-gray-300" />
          <Moon
            className="w-5 h-5 text-gray-500 dark:text-gray-300 cursor-pointer"
            onClick={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
