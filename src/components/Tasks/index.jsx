/** @format */

import React from 'react';
import Task from './Task';

import { v4 as uuid } from 'uuid';

import 'bootstrap/dist/css/bootstrap.css';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userTask: [
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
  }

  setStatus = (key) => {
    this.state.userTask.forEach((key) => {

    })
    if (this.state.userTask.id === key) {
      console.log('The ID is:', key);
    }
    // this.setState((this.state.userTask[0].status = 'Completed'));
    // console.log(id);
  };

  render() {
    return (
      <>
        <div className='container-fluid mt-3'>
          <h3>These are the tasks</h3>
          <hr />
        </div>
        <div className='container-fluid'>
          <div>
            {this.state.userTask.map((task) => {
              return (
                <div key={task.id}>
                  <Task
                    id={task.id}
                    title={task.title}
                    status={task.status}
                    setStatus={this.setStatus}
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
