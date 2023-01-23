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
        task.status =
          task.status === 'Not Completed' ? 'Completed' : 'Not Completed';
      }
      this.setState(task);
    });
  };

  removeTaskHandler = (id) => {
    const filteredTasks = this.state.taskList.filter(
      (selectedTask) => selectedTask.id !== id
    );
    console.log(filteredTasks);
    this.setState({
      taskList: filteredTasks
    });
  };

  clearTasksHandler = () => {
    const clearedTasks = [];
    this.setState({
      taskList: clearedTasks
    });
  };

  render() {
    return (
      <>
        <div className='container-fluid mt-3'>
          <h1 style={{ marginLeft: 15, fontWeight: 'bold' }}>
            These are the tasks
          </h1>
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
                    removeTask={this.removeTaskHandler}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <button className='btn btn-warning' onClick={() => {this.clearTasksHandler()}}>Clear Tasks</button>
          </div>
        </div>
      </>
    );
  }
}
