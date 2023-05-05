"use client"
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@hooks';
import { ReactNode } from 'react';

const Button = ({ handler, children }: { handler: () => void, children: ReactNode }) => {
  return (
    <button
      type="button"
      className="bg-white dark:bg-gray-800 text-slate-900 border dark:border-gray-700 border-gray-200 dark:text-white flex h-7 w-7 cursor-pointer items-center justify-center rounded"
      onClick={handler}
    >
      {children}
    </button>
  )
}

export function ThemeToggler({ type }: { type?: "dark" | "light" | "system" }) {
  const { theme: currentTheme, setDarkTheme, setLightTheme, setSystemTheme } = useTheme() || {};

  const handleToggleTheme = (theme: "dark" | "light" | "system") => {
    if (theme === 'light' && setLightTheme) {
      setLightTheme();
    } else if (theme === 'dark' && setDarkTheme) {
      setDarkTheme();
    } else if (theme === "system" && setSystemTheme) {
      setSystemTheme();
    }
  };

  if (type === "dark") {
    return <Button handler={() => handleToggleTheme("dark")}>
      <SunIcon className="h-4 w-4" />
    </Button>
  }

  if (type === "light") {
    return <Button handler={() => handleToggleTheme("light")}>
      <MoonIcon className="h-4 w-4" />
    </Button>
  }

  if (type === "system") {
    return <Button handler={() => handleToggleTheme("system")}>
      <ComputerDesktopIcon className="h-4 w-4" />
    </Button>
  }

  return (
    <button
      type="button"
      className="bg-white dark:bg-gray-800 text-slate-900 border dark:border-gray-700 border-gray-200 dark:text-white flex h-7 w-7 cursor-pointer items-center justify-center rounded"
      onClick={() => handleToggleTheme(currentTheme === "light" ? "dark" : "light")}
    >
      {currentTheme === 'dark' ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}

export default ThemeToggler;
