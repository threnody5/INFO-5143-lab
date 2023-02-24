/** @format */

import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';

import styles from './styles.module.scss';

import Card from '../../Card';

/**
 * Component that renders the Task.
 */
export default function Task({ id, title, status, setTask, removeTask }) {
  const { theme } = useContext(ThemeContext);
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
          >
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
