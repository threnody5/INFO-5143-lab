/** @format */

import styles from './styles.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${styles[theme]}`}>
      <button
        className={`${styles.themeButton}`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </button>
    </div>
  );
};

export default ThemeToggle;
