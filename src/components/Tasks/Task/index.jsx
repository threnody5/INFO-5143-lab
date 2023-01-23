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
        style={{ paddingLeft: 40, width: 450 }}
      >
        <div>
          <h3 className='text-primary'>{this.props.title}</h3>
        </div>
        <div>
          <span className='text-info'><strong>ID: </strong></span>
          <span className='text-white'>{this.props.id}</span>
        </div>
        <div>
          <span className='text-info'><strong>Status: </strong></span>
          <span 
          className='mb-3'
          style={{ color: '#E4A11B' }}
          >{this.props.status}</span>
        </div>
        <div className=''>
          <button
            className='btn btn-info text-black'
            style={{ marginRight: 50 }}
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
