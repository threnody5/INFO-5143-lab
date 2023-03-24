import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const AddingTasks = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <main className={styles[theme]}>
      <div className={styles.addingTasks}>
        <h1>How to Add Tasks</h1>
        <ol>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </li>
          <li>
            Nisi lacus sed viverra tellus. Felis eget velit aliquet
            sagittis id consectetur purus.
          </li>
          <li>
            Sed tempus urna et pharetra pharetra massa massa ultricies
            mi.
          </li>
          <li>
            Tortor dignissim convallis aenean et tortor at risus
            viverra adipiscing. Mi eget mauris pharetra et ultrices
            neque ornare aenean euismod.
          </li>
        </ol>
      </div>
    </main>
  );
};

export default AddingTasks;
