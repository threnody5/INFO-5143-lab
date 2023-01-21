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
      <div className='container-fluid mt-3 mb-3'>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
          These are the tasks
        </h1>
      </div>
      <div className='container'>
        <div 
        style={{ display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center' }}
        className='mr-3'
        >
          {tasks.map((mappedTask, key) => {
            return (
              <div 
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
        <div style={{ justifyContent: 'center', textAlign: 'center' }}>
          <button
            className='btn btn-warning mb-5'
            // style={{ marginLeft: 150 }}
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
