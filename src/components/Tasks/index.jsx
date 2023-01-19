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
    // console.log(this.state.taskList);
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
    // for (let i = 0; i < this.state.taskList; i++) {
    //   this.state.taskList.splice(i);
    // }

    this.state.taskList.forEach((task) => {
      // for (let i = 0; i < task.length; i++) {
        if (task.id !== key) {
          let taskArray = [];
          taskArray = task;
          console.log(taskArray);

          task = taskArray;

          // console.log(task.id, key);
          // console.log(this.state.taskList[i]);
          // this.state.taskList.push(task[i]);
          // console.log(task.id);
          // for (let i = 0; i < this.state.taskList.length; i++) {
          //   if (task.id === key) {
          //     console.log(this.state.taskList[i]);
          //   }
        // this.state.taskList.splice(i, 1);
          // }
          // this.state.taskList.pop();
        }
      // }
      this.setState(task);
    })
  }

  render() {
    return (
      <>
        <div className='container-fluid mt-3'>
          <h3>These are the tasks</h3>
          <hr />
        </div>
        <div className='container-fluid'>
          <div>
            {this.state.taskList.map((task, key) => {
              return (
                <div key={task.id}>
                  <Task
                    key={key}
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
