👋! In this article, we are going to build a theme toggler that supports system preference and manual selection using Next.js or React and Tailwind CSS.

A Quick overview:

1. Setup [Next.js](https://nextjs.org/docs/getting-started) or [React](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) with [tailwindcss](https://tailwindcss.com/docs/installation/framework-guides)

2. Configure tailwind for [Dark Mode](https://tailwindcss.com/docs/dark-mode)

- Media Strategy: To support system(browser/os) preference, Available by default
- Class strategy: To support both system preference or a manually selected mode

Continue, For class strategy

3. Check theme preference in localStorage or system preference using [`Window.matchMedia()` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

- If preference is "dark", Add "dark" classname in HTML tree
- Else, Remove "dark" classname from HTML tree

```
 if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
```

4. Manually toggle theme

- Set light mode

```
localStorage.theme = 'light'
```

- Set dark mode

```
localStorage.theme = 'dark'
```

- Set system preference

```
localStorage.removeItem('theme')
```

Continue, to implement theme toggling using context and hooks

5. Build a context-hook(`ThemeProvider` & `useTheme`) for theme context:

- The context checks for theme preference.

- The context should provide: `theme` to get theme preference, and methods `setDarkTheme`, `setLightTheme` & `setSystemTheme` to set theme modes
