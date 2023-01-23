/** @format */

import 'bootstrap/dist/css/bootstrap.css';

import reactIcon from '../../icons/React-icon.png';
import bootstrapIcon from '../../icons/Bootstrap-icon.png';

export default function Header() {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='justify-content-left'>
          <img
            style={{ marginLeft: '20px', marginRight: '20px' }}
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
        </div>
        <div
          className='justify-content-end'
          style={{ justifyContent: 'center' }}
        >
          <span className=''>
            <strong
              style={{
                marginLeft: '20px',
                marginRight: '20px',
                color: '#6a5acd'
              }}
            >
              Todo App
            </strong>
          </span>
          <span
            className='text-info'
            style={{ marginRight: 20 }}
          >
            <strong>William Watson</strong>
          </span>
        </div>
      </nav>
    </>
  );
}
