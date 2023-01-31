/** @format */

import './index.css';

/**
 * Component that renders the Task.
 */
export default function Task({ id, title, status, setTask, removeTask }) {
  return (
    <div
      id='task-container'
      className='bg-dark pt-3 rounded'
    >
      <div>
        <h3 className='text-primary'>{title}</h3>
      </div>
      <div className='text-white'>
        <strong className='text-info'>ID: </strong>
        {id}
      </div>
      <div className='text-white mb-3'>
        <strong>Status: </strong>
        {/* Task status color changes depending on status state */}
        <span style={{ color: status === 'Completed' ? '#28a745' : '#ffc107' }}>
          {status}
        </span>
      </div>
      <div className=''>
        {/* Button for changing the status between 'Completed' and 'Open' */}
        <button
          className='btn btn-info text-black'
          onClick={() => {
            setTask(id);
          }}
        >
          Change Status
        </button>
        {/* Button to remove the task from the list of tasks */}
        <button
          id='remove-task-button'
          className='btn btn-danger text-black'
          onClick={() => {
            removeTask(id);
          }}
        >
          Remove Task
        </button>
        <hr />
      </div>
    </div>
  );
}
