/** @format */

import React from 'react';

import Tasks from '..';

import 'bootstrap/dist/css/bootstrap.css';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className=''>
        <div>
          <h4>{this.props.title}</h4>
        </div>
        <div>{this.props.id}</div>
        <div>{this.props.status}</div>
        {/* <div className=''>
          <button
            className='btn btn-warning btn-sm text-dark'
            onClick={() => {
              Tasks.setStatus();
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
        </div> */}
      </div>
    );
  }
}
