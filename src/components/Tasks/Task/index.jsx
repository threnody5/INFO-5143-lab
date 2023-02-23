/** @format */

import './index.css';

/**
 * Component that renders the Task.
 */
export default function Task({ id, title, status, setTask, removeTask }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <strong>ID: </strong>
        {id}
      </div>
      <div>
        <strong>Status: </strong>
        {/* Task status color changes depending on status state */}
        <span style={{ color: status === 'Completed' ? '#28a745' : '#ffc107' }}>
          {status}
        </span>
      </div>
      <div>
        {/* Button for changing the status between 'Completed' and 'Open' */}
        <button
          onClick={() => {
            setTask(id);
          }}
        >
          Change Status
        </button>
        {/* Button to remove the task from the list of tasks */}
        <button
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
