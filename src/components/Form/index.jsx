/** @format */

import './style.css';

/**
 * Component that renders the Form for the user.
 * - Field that allows the user to set a task description.
 * - Dropdown field that allows the user to select a status.
 */
export default function Form({
  addTask,
  description,
  setDescription,
  setSelectedValue,
  statusList,
  selectedValue,
  errorMessage,
}) {
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div
      id='new-task-container'
      className='container'
    >
      <form className='mt-3 mb-3 bg-dark rounded'>
        <div className='container-fluid'>
          <h2
            id='add-task-text'
            className='text-primary'
          >
            Add a new task:{' '}
          </h2>
          {/* Conditional rendering for displaying the list of errors to 
          the users if the errorMessage array has a length greater than 0 */}
          {errorMessage.length > 0 && (
            <div className='text-white'>
              Missing Data:
              <ul>
                {errorMessage.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          id='add-task-fields'
          className='container'
        >
          <div className='form-group'>
            <label className='text-white'>
              {/* Field that allows the user to enter in the description 
              that they desire for the task they're adding */}
              Description:
              <input
                className='form-control'
                type='text'
                placeholder='Description here'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </label>
            <span>
              <label
                id='dropbox-field'
                className='text-white'
              >
                {/* Dropdown menu that allows the user to select 
                if the task they're adding is 'Open' or 'Completed */}
                Status:
                <select
                  className='form-control'
                  value={selectedValue}
                  onChange={handleChange}
                >
                  {statusList.map((item, index) => (
                    <option
                      key={index}
                      value={item.value}
                    >
                      {item.status}
                    </option>
                  ))}
                </select>
              </label>
            </span>
            <div>
              {/* Button to add the task to the task list */}
              <button
                id='add-button'
                className='btn btn-success mt-3 mb-3'
                onClick={addTask}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
