import { useEffect, useState } from 'react';

const THEMES = ['gold', 'orange', 'blue'];
const STORAGE_KEY = 'bcp-theme';

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return THEMES.indexOf(stored) !== -1 ? stored : 'orange';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }, [theme]);

  return [theme, setTheme];
}