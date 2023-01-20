/** @format */

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Task from './Task';

import 'bootstrap/dist/css/bootstrap.css';

export default function Tasks() {
  const [task, setTask] = useState([
    {
      id: uuid(),
      title: 'Change Jeep oil',
      status: 'Not Completed',
    },
    {
      id: uuid(),
      title: 'Clean the kitchen',
      status: 'No Completed',
    },
    {
      id: uuid(),
      title: 'Rake the leaves',
      status: 'Not Completed',
    },
  ]);

  const setTaskHandler = (id) => {
    // const updatedPosts = [];
    task.forEach((selectedTask) => {
      if (selectedTask.id === id) {
        selectedTask.status = 'Completed';
      }
      console.log(selectedTask);
      // setTask(selectedTask);
    });
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
          {task.map((mappedTask, key) => {
            return (
              <div key={key}>
                <Task
                  key={mappedTask.id}
                  id={mappedTask.id}
                  title={mappedTask.title}
                  status={mappedTask.status}
                  setTask={setTaskHandler}
                  //   removeTask={removeTask}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
