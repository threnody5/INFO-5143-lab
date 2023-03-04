/** @format */

import styles from './styles.module.scss';
import ThemeToggle from '../ThemeToggle';
import { SiSass } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { useSelector } from 'react-redux';

/**
 * Component that renders the header navbar.
 */
export default function Header() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`${styles.themeToggle}`}>
      <nav className={`${styles.header} ${styles[theme]}`}>
        <div className={`${styles.headerIcons}`}>
          {/* React Icon */}
          <FaReact className={`${styles[theme]} ${styles.reactIcon}`} />
          {/* SASS Icon */}
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
