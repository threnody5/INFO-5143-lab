/** @format */

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import styles from './styles.module.scss';

const PageNotFound = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <Card className={styles.pageNotFoundContainer}>
      <main className={styles[theme]}>
        <h1>Page not found</h1>
        <h3>We were unable to locate that page.</h3>
        Head back to <Link to='/'>Tasks</Link> page.
      </main>
    </Card>
  );
};

export default PageNotFound;
