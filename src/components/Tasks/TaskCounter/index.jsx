/** @format */

import { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';

import styles from './styles.module.scss';

import Card from '../../Card';

import { useState, useEffect } from 'react';

const TaskCounter = ({ tasks }) => {
  const { theme } = useContext(ThemeContext);
  const [countTasks, setCountTasks] = useState();
  const [openStatusCount, setOpenStatusCount] = useState();
  const [completedStatusCount, setCompletedStatusCount] = useState();

  let displayedTasks;

  // Updates the 'displayedTasks' string depending on length of the 'countTasks' array.
  if (countTasks > 1) {
    displayedTasks = `There are ${countTasks} tasks remaining`;
  } else if (countTasks === 0) {
    displayedTasks = `There are no tasks remaining`;
  } else {
    displayedTasks = `There is ${countTasks} task remaining`;
  }

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
  return (
    <Card className={`${styles.taskCounterContainer}`}>
      <div className={`${styles[theme]}`}>
        <h1>{displayedTasks}</h1>
        {/* If tasks has a length greater than 0, renders the amount of open tasks, */}
        {/* and completed tasks */}
        {tasks.length > 0 && (
          <div>
            <h3>Open Tasks: {openStatusCount}</h3>
            <h3>Completed Tasks: {completedStatusCount}</h3>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TaskCounter;
