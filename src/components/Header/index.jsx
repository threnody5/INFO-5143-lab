/** @format */

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reactIcon from '../../icons/React-icon.png';
import bootstrapIcon from '../../icons/Bootstrap-icon.png';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-dark bg-dark'>
          <div className=''>
            <img
              src={reactIcon}
              alt=''
              height={28}
              width={35}
            />
            <img
              src={bootstrapIcon}
              alt=''
              height={33}
              width={35}
            />
            <span className='text-white'>
              <strong>Todo App</strong>
            </span>
            <span className='text-white'>
              <strong>William Watson</strong>
            </span>
          </div>
        </nav>
      </>
    );
  }
}
