/** @format */

import React from 'react';
import Task from './Task';

import { v4 as uuid } from 'uuid';

import 'bootstrap/dist/css/bootstrap.css';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [
        {
          id: uuid(),
          title: 'Change car oil',
          status: 'Not Completed',
        },
        {
          id: uuid(),
          title: 'Clean the litter box',
          status: 'Not Completed',
        },
        {
          id: uuid(),
          title: 'Do laundry',
          status: 'Not Completed',
        },
      ],
    };
    console.log(this.state.taskList);
  }

  setStatus = (key) => {
    this.state.taskList.forEach((task) => {
      if (task.id === key) {
        // task.status = 'Not Completed' ? 'Completed' : 'Not Completed';
        if (task.status !== 'Completed') {
          task.status = 'Completed';
        } else if (task.status === 'Completed') {
          task.status = 'Not Completed';
        }
      }
      this.setState(task);
    });
  };

  removeTask = (key) => {
    let taskArray = [];
    let taskObject = [];

    this.state.taskList.forEach((task) => {
      if (task.id !== key) {
        taskArray.push(task);
        taskObject = {
          taskList: [
            {
              id: task.id,
              title: task.title,
              status: task.status,
            },
          ],
          taskObject,
        };
      }
    });
    console.log(taskArray);
    this.setState(taskObject);

    console.log(taskObject);
  };

  render() {
    return (
      <>
        <div className='container-fluid mt-3'>
          <h3 style={{ marginLeft: 70 }}>These are the tasks</h3>
          <hr />
        </div>
        <div className='container-fluid'>
          <div>
            {this.state.taskList.map((task, key) => {
              return (
                <div key={key}>
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    setStatus={this.setStatus}
                    removeTask={this.removeTask}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
