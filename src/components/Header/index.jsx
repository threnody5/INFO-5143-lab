/** @format */

import './index.css';

import reactIcon from '../../icons/React-icon.png';
import bootstrapIcon from '../../icons/Bootstrap-icon.png';

/**
 * Component that renders the header navbar.
 */
export default function Header() {
  return (
    <>
      <nav>
        <div>
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
        <div>
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
