/** @format */

import { useState, useEffect } from 'react';
// import { v4 as uuid } from 'uuid';

import Task from './Task';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

/**
 * Component that renders the Tasks list.
 */
export default function Tasks({ tasks, setTasks }) {
  const [countTasks, setCountTasks] = useState();
  const [openStatusCount, setOpenStatusCount] = useState();
  const [completedStatusCount, setCompletedStatusCount] = useState();

  let displayedTasks;

  /**
   * useEffect hook that tracks states of the tasks list.
   * - Monitors the length of the tasks list.
   * - Monitors the amount of tasks set to 'Open'.
   * - Monitors the amount of tasks set to 'Completed'.
   */
  useEffect(() => {
    const currentTasks = tasks.filter((task) => task).length;
    setCountTasks(currentTasks);
    const openTasks = tasks.filter((task) => task.status === 'Open').length;
    setOpenStatusCount(openTasks);
    const completedTasks = tasks.filter(
      (task) => task.status === 'Completed'
    ).length;
    setCompletedStatusCount(completedTasks);
  }, [tasks]);

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
        selectedTask.status =
          selectedTask.status === 'Completed' ? 'Open' : 'Completed';
      }
    });
    setTasks(updatedTask);
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

  /**
   * Updates the 'displayedTasks' string depending on length of the 'countTasks' array.
   */
  if (countTasks > 1) {
    displayedTasks = `There are ${countTasks} tasks remaining`;
  } else if (countTasks === 0) {
    displayedTasks = `There are no tasks remaining`;
  } else {
    displayedTasks = `There is ${countTasks} task remaining`;
  }

  return (
    <>
      <div
        id='tasks-container'
        className='container-fluid mt-3 mb-3 bg-dark rounded'
      >
        <h1
          id='task-counter'
          className='text-primary'
        >
          {displayedTasks}
        </h1>
        <h3
          id='task-counter'
          className='text-white'
        >
          Open Tasks: {openStatusCount}
        </h3>
        <h3
          id='task-counter'
          className='text-white'
        >
          Completed Tasks: {completedStatusCount}
        </h3>
      </div>
      <div className='container'>
        <div
          id='tasks-list'
          className='mr-3'
        >
          {tasks.map((mappedTask, key) => {
            return (
              <div key={key}>
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
        <div id='clear-tasks-button'>
          <button
            className='btn btn-warning mb-5'
            onClick={() => {
              clearTasksHandler();
            }}
          >
            Clear Tasks
          </button>
        </div>
      </div>
    </>
  );
}
