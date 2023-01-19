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
      <div
        className='bg-dark pt-3 rounded'
        style={{ paddingLeft: 15, width: 400 }}
      >
        <div>
          <h4 className='text-primary'>{this.props.title}</h4>
        </div>
        <div className='text-white'>{this.props.id}</div>
        <div className='text-white mb-3'>{this.props.status}</div>
        <div className=''>
          <button
            className='btn btn-info text-black'
            style={{ marginRight: 10 }}
            onClick={() => {
              this.setStatus(this.id);
            }}
          >
            Change Status
          </button>
          <button
            className='btn btn-danger text-black'
            onClick={() => {
              this.removeTask(this.id);
            }}
          >
            Remove Task
          </button>
          <hr />
        </div>
      </div>
    );
  }
}
