/** @format */

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.setStatus = this.props.setStatus;
    this.removeTask = this.props.removeTask;
    this.id = this.props.id;
  }
  render() {
    return (
      <div className=''>
        <div>
          <h4>{this.props.title}</h4>
        </div>
        <div>{this.props.id}</div>
        <div>{this.props.status}</div>
        <div className=''>
          <button
            className='btn btn-warning btn-sm text-dark'
            style={{ marginRight: 10 }}
            onClick={() => {
              this.setStatus(this.id);
            }}
          >
            Change Status
          </button>
          <button
            className='btn btn-danger btn-sm text-dark'
            onClick={() => {
              this.removeTask(this.id);
            }}
          >
            Remove Task
          </button>
        </div>
      </div>
    );
  }
}
