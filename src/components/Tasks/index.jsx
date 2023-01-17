/** @format */

import React from 'react';
import Task from './Task';

import { v4 as uuid } from 'uuid';

import 'bootstrap/dist/css/bootstrap.css';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStatus: [
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
    console.log(this.state.currentStatus);
  }

  setStatus = (key) => {
    // this.setState((this.state.currentStatus[key].status = 'Completed'));
    // console.log(`set status function is firing at key ${key}`);
    console.log(this.state.currentStatus[key]);
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
            {this.state.currentStatus.map((task, key) => {
              return (
                <div key={task.id}>
                  <Task
                    id={task.id}
                    title={task.title}
                    status={task.status}
                  />
                  <div className=''>
                    <button
                      className='btn btn-warning btn-sm text-dark'
                      onClick={() => {
                        this.setStatus(key);
                      }}
                    >
                      Change Status
                    </button>
                    <button
                      className='btn btn-danger btn-sm text-dark'
                      onClick={() => {
                        console.log('Remove Task button works');
                      }}
                    >
                      Remove Task
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
