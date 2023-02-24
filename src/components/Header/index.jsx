/** @format */

import styles from './styles.module.scss';
import { useContext } from 'react';

import ThemeToggle from '../ThemeToggle';
import { ThemeContext } from '../ThemeContext';

import { SiSass } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

/**
 * Component that renders the header navbar.
 */
export default function Header() {
  const { theme } = useContext(ThemeContext);

  console.log(theme);
  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      <nav>
        <div className={`${styles.headerIcons}`}>
          <FaReact className={`${styles.reactIcon}`} />
          <SiSass className={`${styles.sassIcon}`} />
        </div>
        <div className={`${styles.headerText}`}>
          <span>
            <strong>Todo App</strong>
          </span>
          <span>
            <strong>William Watson</strong>
          </span>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
