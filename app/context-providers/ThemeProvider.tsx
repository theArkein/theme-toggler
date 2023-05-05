"use client"
import React, { ReactNode, useEffect, useMemo, useState } from 'react';

type ThemeType = 'light' | 'dark';
export const ThemeContext = React.createContext<
  | {
    theme: 'light' | 'dark';
    setDarkTheme: () => void;
    setLightTheme: () => void;
    setSystemTheme: () => void;
  }
  | undefined
>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    setMounted(true);
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches }) => {
        if (!('theme' in localStorage)) {
          if (matches) {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }
      });
  });

  const setDarkTheme = () => {
    localStorage.theme = 'dark';
    setTheme('dark');
  };

  const setLightTheme = () => {
    localStorage.theme = 'light';
    setTheme('light');
  };

  const setSystemTheme = () => {
    localStorage.removeItem('theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  };

  const value = useMemo(
    () => ({
      theme,
      setDarkTheme,
      setLightTheme,
      setSystemTheme,
    }),
    [theme]
  );

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
