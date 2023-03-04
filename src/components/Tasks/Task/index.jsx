/** @format */

import styles from './styles.module.scss';
import Card from '../../Card';
import { useSelector } from 'react-redux';

/**
 * Component that renders the Task.
 */
export default function Task({ id, title, status, task, setTask, removeTask }) {
  const theme = useSelector((state) => state.theme.value);
  return (
    <Card className={`${styles.taskContainer}`}>
      <div className={`${styles[theme]}`}>
        <div className={`${styles.titleContainer}`}>
          <h3 className={`${styles.titleText}`}>{title.toUpperCase()}</h3>
        </div>
        <div className={`${styles.taskInfo}`}>
          <strong>ID: </strong>
          <span className={`${styles.taskId}`}> {id}</span>
        </div>
        <div className={`${styles.taskInfo}`}>
          <strong>Status: </strong>
          {/* Task status color changes depending on status state */}
          <span
            className={`${styles.taskStatus}`}
            style={{ color: status === 'Completed' ? '#28a745' : '#ffc107' }}
            //! TODO: enable rendering of different colors depending on status and theme selected.
            // style={{
            // color:
            // status === 'Completed'
            // ? `${styles[theme]} ${styles.taskStatus} ${styles.completed}`
            // : `${styles[theme]} ${styles.taskStatus} ${styles.open}`,
            // }}
          >
            {/* {theme === 'Completed' ? completed : open} */}
            {status}
          </span>
        </div>
        <div className={`${styles.buttonContainer}`}>
          {/* Button for changing the status between 'Completed' and 'Open' */}
          <button
            className={`${styles.statusButton}`}
            onClick={() => {
              setTask(id);
            }}
          >
            Change Status
          </button>
          {/* Button to remove the task from the list of tasks */}
          <button
            className={`${styles.removeButton}`}
            onClick={() => {
              removeTask(id);
            }}
          >
            Remove Task
          </button>
        </div>
      </div>
    </Card>
  );
}
