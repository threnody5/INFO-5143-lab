/** @format */

import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const HelpInformation = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <main className={styles.helpInformationContainer}>
      <div className={styles[theme]}>
        <h1>Help</h1>
        <h3>This App helps to keep track of your tasks.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
};

export default HelpInformation;
