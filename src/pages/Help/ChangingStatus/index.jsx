/** @format */

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const ChangingStatus = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <main className={styles.ChangingStatus}>
      <div className={styles[theme]}>
        <h1>How to Change the Status</h1>
        <p>
          Eu augue ut lectus arcu bibendum at varius vel pharetra. Imperdiet
          massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.
          Non odio euismod lacinia at quis risus sed vulputate odio. At
          imperdiet dui accumsan sit amet nulla. Mauris augue neque gravida in.
          Vel eros donec ac odio tempor orci dapibus ultrices in. Ultricies
          integer quis auctor elit sed vulputate. Pulvinar mattis nunc sed
          blandit libero volutpat sed cras. Tempor orci eu lobortis elementum
          nibh tellus molestie nunc. Euismod quis viverra nibh cras pulvinar
          mattis nunc. Blandit aliquam etiam erat velit scelerisque in dictum
          non. Ac feugiat sed lectus vestibulum mattis ullamcorper. Scelerisque
          eleifend donec pretium vulputate sapien nec sagittis aliquam
          malesuada. Eget mi proin sed libero. Proin sagittis nisl rhoncus
          mattis rhoncus urna neque viverra.
        </p>
      </div>
    </main>
  );
};

export default ChangingStatus;
