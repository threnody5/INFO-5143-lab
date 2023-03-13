/** @format */

import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const NavRouter = () => {
  const theme = useSelector((state) => state.theme.value);
  console.log(theme);
  return (
    <nav className={`${styles.navContainer} ${styles[theme]}`}>
      <NavLink to='/'>Tasks</NavLink>
      <NavLink to='add-task'>Add a Task</NavLink>
      <NavLink to='help'>Help</NavLink>
    </nav>
  );
};

export default NavRouter;