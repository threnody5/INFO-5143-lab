import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const RemovingTasks = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <main className={styles[theme]}>
      <div className={styles.removeTasks}>
        <h1>How to remove tasks</h1>
        <ol>
          <li>
            Vel quam elementum pulvinar etiam. Ullamcorper morbi
            tincidunt ornare massa.
          </li>
          <li>
            Elementum pulvinar etiam non quam. Ullamcorper a lacus
            vestibulum sed.
          </li>
        </ol>
      </div>
    </main>
  );
};

export default RemovingTasks;
