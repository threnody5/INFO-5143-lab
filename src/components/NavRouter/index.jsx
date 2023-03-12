/** @format */

import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const NavRouter = () => {
  const theme = useSelector((state) => state.theme.themeValue);
  return (
    <nav className={`${styles.navContainer} ${styles[theme]}`}>
      <Link to='/'>Tasks</Link>
      <Link to='add-task'>Add a Task</Link>
      <Link to='help'>Help</Link>
    </nav>
  );
};

export default NavRouter;
