import { useState } from 'react';
import styles from './styles.module.scss';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeTaskStatus,
  removeTask,
  clearTasks,
} from './../../utils/redux/tasksSlice';
import * as restAPI from './../../restapi';
import ErrorMessage from '../ErrorMessage';

/**
 * Component that renders the Tasks list.
 */
export default function Tasks() {
  const [error, setError] = useState('');
  const theme = useSelector((state) => state.theme.value);
  let tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  /**
   * Handler function for setting the status of the selected task.
   * - Sets selected status to 'Completed' if task is 'Open'.
   * - Sets selected status to 'Open' if task is 'Completed'.
   * - Passes the updated array to the 'tasks' array.
   */
  const setTaskHandler = async (id) => {
    // Update the state.
    const updatedTask = [...tasks];

    updatedTask.forEach((selectedTask) => {
      if (selectedTask.id === id) {
        const selectedTaskStatus =
          selectedTask.done === 'Completed' ? 'Open' : 'Completed';
        const data = {
          id: id,
          updatedTask: selectedTaskStatus,
        };
        dispatch(changeTaskStatus(data));
      }

      // Update the server.
    });
    const selectedTask = updatedTask.find((task) => task.id === id);
    const selectedTaskStatus =
      selectedTask.done === 'Completed' ? 'Open' : 'Completed';
    const data = {
      id: selectedTask.id,
      description: selectedTask.description,
      done: selectedTaskStatus,
    };
    const result = await restAPI.update(data);
    if (!result.success) {
      setError(result.error);
    }
  };

  /**
   * Handler function for removing the selected task from the list.
   * - Filters through the 'tasks' array for id's that do not match the selected id.
   * - Passes objects that do not match to a new array.
   * -  Passes the updated array to the 'tasks' array.
   */
  const removeTaskHandler = async (id) => {
    // Update the state.
    const filteredTasks = tasks.filter(
      (selectedTask) => selectedTask.id !== id
    );
    dispatch(removeTask(filteredTasks));

    // Update the server.
    const result = await restAPI.deleteTask(id);
    console.log('Result: ', result);
    if (!result.success) {
      setError(result.error);
    }
  };

  /**
   * Handler function for removing all tasks from the list.
   * - Creates a new empty array.
   * - Passes the empty array to the 'tasks' array.
   */
  const clearTasksHandler = async () => {
    const clearedTasks = [];
    dispatch(clearTasks(clearedTasks));
    const result = await restAPI.deleteAll();
    if (!result.success) {
      setError(result.error);
    }
  };

  return (
    <>
      <ErrorMessage error={error} />
      <div className={`${styles[theme]}`}>
        {/* Maps through the tasks array and outputs each task */}
        <div className={`${styles.tasks}`}>
          {tasks.map((mappedTask, key) => {
            return (
              <div
                className={`${styles.task}`}
                key={key}
              >
                <Task
                  key={key}
                  id={mappedTask.id}
                  description={mappedTask.description}
                  done={mappedTask.done}
                  setTask={setTaskHandler}
                  removeTask={removeTaskHandler}
                />
              </div>
            );
          })}
        </div>
        <div className={`${styles.buttonContainer}`}>
          {/* If the tasks length is greater than 0, renders the Clear Tasks button */}
          {tasks.length > 0 && (
            <button
              className={`${styles.clearButton}`}
              onClick={() => {
                clearTasksHandler();
              }}
            >
              Clear Tasks
            </button>
          )}
        </div>
      </div>
    </>
  );
}
