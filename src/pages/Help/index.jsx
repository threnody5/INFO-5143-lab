/** @format */

import Card from '../../components/Card';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Help = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <Card className={`${styles.helpContainer}`}>
      <div className={styles[theme]}>
        <Outlet />
        <div>
          <Link to='adding-tasks'>Adding Tasks</Link>
        </div>
      </div>
    </Card>
  );
};

export default Help;
