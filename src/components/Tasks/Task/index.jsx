/** @format */

import './styles.scss';

import Card from '../../Card';

/**
 * Component that renders the Task.
 */
export default function Task({ id, title, status, setTask, removeTask }) {
  return (
    <Card className='task-container'>
      <div className='title'>
        <h3>{title.toUpperCase()}</h3>
      </div>
      <div className='task-info'>
        <strong>ID: </strong>
        <span className='task-id'> {id}</span>
      </div>
      <div className='task-info'>
        <strong>Status: </strong>
        {/* Task status color changes depending on status state */}
        <span
          className='task-status'
          style={{ color: status === 'Completed' ? '#28a745' : '#ffc107' }}
        >
          {status}
        </span>
      </div>
      <div className='button-container'>
        {/* Button for changing the status between 'Completed' and 'Open' */}
        <button
          className='status-button'
          onClick={() => {
            setTask(id);
          }}
        >
          Change Status
        </button>
        {/* Button to remove the task from the list of tasks */}
        <button
          className='remove-button'
          onClick={() => {
            removeTask(id);
          }}
        >
          Remove Task
        </button>
      </div>
    </Card>
  );
}
