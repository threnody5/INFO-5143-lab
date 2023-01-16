/** @format */

import React from 'react';
import Task from './Task';

import 'bootstrap/dist/css/bootstrap.css';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.currentStatus = 'Not Completed';
  }

  setStatus = () => {
    // this.setState(this.currentStatus ? 'Not Completed' : 'Completed');
    console.log('set status function is firing');
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
            <Task
              title='Change the oil'
              id='0368b1f090d81293a0bf7b9a09452192'
              //   status={this.currentStatus}
            />
          </div>
          <div>
            <Task
              title='Clean the litter box'
              id='d56702e763eb782a7b09030b3e1a554f'
              status='Not Completed'
            />
          </div>
          <div>
            <Task
              title='Do laundry'
              id='f74a80349afac422dd3b4f72fca1f243'
              status='Not Completed'
            />
          </div>
        </div>
      </>
    );
  }
}
