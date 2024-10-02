'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
  theme: ThemeType;
  switchTheme: () => void;
};

type ThemeContextProviderType = {
  children: ReactNode;
};

const ThemeContext = createContext<{
  theme: ThemeType;
  switchTheme: () => void;
}>({
  theme: 'dark',
  switchTheme: () => {},
});

function ThemeContextProvider({ children }: ThemeContextProviderType) {
  const [theme, setTheme] = useState<ThemeType>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    // Remove the old theme class and add the new one
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(initialTheme);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    // Remove the old theme class and add the new one
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div
        className='
       light:text-gray-200 light:bg-gray-700
       dark:text-gray-200 dark:bg-gray-700
      min-h-screen select-none transition-colors duration-300'
      >
      
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

//Hook use context for theme

export const useTheme = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error('useTheme must be used withing a ThemeContextProvider');
  }
  return {
    theme,
    switchTheme,
  };
  // return ThemeContext;
};
