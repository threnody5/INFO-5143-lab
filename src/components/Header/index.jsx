/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reactIcon from '../../icons/React-icon.png';
import bootstrapIcon from '../../icons/Bootstrap-icon.png';

/**
 * Component that renders the header navbar.
 */
export default function Header() {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='justify-content-left'>
          <img
            id='react-icon'
            src={reactIcon}
            alt=''
            height={28}
            width={35}
          />
          <img
            id='bootstrap-icon'
            src={bootstrapIcon}
            alt=''
            height={33}
            width={35}
          />
        </div>
        <div className='justify-content-end'>
          <span className=''>
            <strong id='todo-app-text'>Todo App</strong>
          </span>
          <span
            id='name-text'
            className='text-info'
          >
            <strong>William Watson</strong>
          </span>
        </div>
      </nav>
    </>
  );
}
