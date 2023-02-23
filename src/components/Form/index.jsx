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
    <div>
      <form>
        <div>
          <h2>Add a new task: </h2>
          {/* Conditional rendering for displaying the list of errors to 
          the users if the errorMessage array has a length greater than 0 */}
          {errorMessage.length > 0 && (
            <div>
              Missing Data:
              <ul>
                {errorMessage.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <div>
            <label>
              {/* Field that allows the user to enter in the description 
              that they desire for the task they're adding */}
              Description:
              <input
                type='text'
                placeholder='Description here'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </label>
            <span>
              <label>
                {/* Dropdown menu that allows the user to select 
                if the task they're adding is 'Open' or 'Completed */}
                Status:
                <select
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
              <button onClick={addTask}>Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
