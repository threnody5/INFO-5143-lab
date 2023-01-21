/** @format */

import 'bootstrap/dist/css/bootstrap.css';

import reactIcon from '../../icons/React-icon.png';
import bootstrapIcon from '../../icons/Bootstrap-icon.png';

export default function Header() {
  return (
    <>
      <nav className='navbar me-auto navbar-right navbar-dark bg-dark'>
        <div className=''>
          <img
            style={{ marginLeft: '10px', marginRight: '10px' }}
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
            <strong style={{ marginLeft: '20px', marginRight: '20px', textAlign: 'right' }}>
              Todo App
            </strong>
          </span>
          <span className='text-white'>
            <strong>William Watson</strong>
          </span>
        </div>
      </nav>
    </>
  );
}
