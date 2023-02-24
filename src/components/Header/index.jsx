/** @format */

import './styles.scss';

import { SiSass } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

/**
 * Component that renders the header navbar.
 */
export default function Header() {
  return (
    <div className='header-container'>
      <nav>
        <div className='header-icons'>
          <FaReact className='react-icon' />
          <SiSass className='sass-icon' />
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
    </div>
  );
}
