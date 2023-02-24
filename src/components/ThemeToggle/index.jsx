/** @format */

import { useContext } from 'react';

import { ThemeContext } from '../ThemeContext';

import './styles.scss';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme}
    </button>
  );
};

export default ThemeToggle;
