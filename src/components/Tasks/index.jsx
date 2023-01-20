/** @format */

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Task from './Task';

import 'bootstrap/dist/css/bootstrap.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Change Jeep oil',
      status: 'Open',
    },
    {
      id: uuid(),
      title: 'Clean the kitchen',
      status: 'Open',
    },
    {
      id: uuid(),
      title: 'Rake the leaves',
      status: 'Open',
    },
  ]);

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

  const removeTaskHandler = (id) => {
    const filteredTasks = tasks.filter(
      (selectedTask) => selectedTask.id !== id
    );
    setTasks(filteredTasks);
  };

  const clearTasksHandler = () => {
    const clearedTasks = [];
    setTasks(clearedTasks);
  };

  return (
    <>
      <div className='container-fluid mt-3'>
        <h1 style={{ marginLeft: 15, fontWeight: 'bold' }}>
          These are the tasks
        </h1>
        <hr />
      </div>
      <div className='container-fluid'>
        <div>
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
        <hr />
        <div>
          <button
            className='btn btn-warning mb-5'
            style={{ marginLeft: 150}}
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
