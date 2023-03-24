import styles from './styles.module.scss';
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux';
import { changeTaskStatus } from './../../utils/redux/tasksSlice';

/**
 * Component that renders the Tasks list.
 */
export default function Tasks({ setTasks }) {
  const theme = useSelector((state) => state.theme.value);
  let tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  /**
   * Handler function for setting the status of the selected task.
   * - Sets selected status to 'Completed' if task is 'Open'.
   * - Sets selected status to 'Open' if task is 'Completed'.
   * - Passes the updated array to the 'tasks' array.
   */
  const setTaskHandler = (id) => {
    const updatedTask = [...tasks];

    updatedTask.forEach((selectedTask) => {
      if (selectedTask.id === id) {
        const selectedTaskStatus =
          selectedTask.status === 'Completed' ? 'Open' : 'Completed';
        const data = {
          id: id,
          updatedTask: selectedTaskStatus,
        };
        dispatch(changeTaskStatus(data));
      }
    });
  };

  /**
   * Handler function for removing the selected task from the list.
   * - Filters through the 'tasks' array for id's that do not match the selected id.
   * - Passes objects that do not match to a new array.
   * -  Passes the updated array to the 'tasks' array.
   */
  const removeTaskHandler = (id) => {
    const filteredTasks = tasks.filter(
      (selectedTask) => selectedTask.id !== id
    );
    setTasks(filteredTasks);
  };

  /**
   * Handler function for removing all tasks from the list.
   * - Creates a new empty array.
   * - Passes the empty array to the 'tasks' array.
   */
  const clearTasksHandler = () => {
    const clearedTasks = [];
    setTasks(clearedTasks);
  };

  return (
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
                title={mappedTask.title}
                status={mappedTask.status}
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
  );
}
