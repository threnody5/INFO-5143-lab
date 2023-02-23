/** @format */

import './styles.scss';

import reactIcon from '../../icons/React-icon.png';
import bootstrapIcon from '../../icons/Bootstrap-icon.png';

/**
 * Component that renders the header navbar.
 */
export default function Header() {
  return (
    <>
      <nav className='header-container'>
        <div className='header-icons'>
          <img
            className='react-icon'
            src={reactIcon}
            alt=''
          />
          <img
            className='bootstrap-icon'
            src={bootstrapIcon}
            alt=''
          />
        </div>
        <div className='header-text'>
          <span>
            <strong>Todo App</strong>
          </span>
          <span>
            <strong>William Watson</strong>
          </span>
        </div>
      </nav>
    </>
  );
}
