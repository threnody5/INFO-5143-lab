/** @format */

import Card from '../../components/Card';
import HelpNavRouter from '../../components/HelpNavRouter';
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
          <HelpNavRouter />
        </div>
      </div>
    </Card>
  );
};

export default Help;
