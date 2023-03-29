import styles from './styles.module.scss';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from '../../utils/redux/tasksSlice';
import * as database from './../../firebase';

/**
 * Component that renders the Form for the user.
 * - Field that allows the user to set a task description.
 * - Dropdown field that allows the user to select a status.
 */
export default function Form() {
  const theme = useSelector((state) => state.theme.value);
  const statusList = useSelector((state) => state.statusList.list);
  const [description, setDescription] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [errorMessage, setErrorMessage] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  /**
   * Handler function for verifying user had entered required information.
   * - Description is required.
   * - Status is required.
   * - If all checks are passed, new task is added to task list.
   */
  const addTaskHandler = async (e) => {
    e.preventDefault();
    const validate = [];
    // Checks for description variable string length, if length is 0, then it pushes the message to the validate array.
    if (description.length === 0) {
      validate.push('Please enter a description.');
    }
    // Checks for selected status variable string contents, if string is empty, it pushes the message to the validate array.
    if (selectedValue !== 'true' && selectedValue !== 'false') {
      validate.push('Please select a status.');
    }
    // Checks for the length of the validate array, if array length is greater than 0, it sets the error messages to the error message array.
    if (validate.length > 0) {
      setErrorMessage(validate);
    } else {
      // If there are no errors to display, it sets the error message array to a blank array to clear the previous error messages.
      setErrorMessage([]);

      let currentStatus;
      // Uses boolean values to determine whether the currentStatus should be set to 'Open' or 'Completed'.
      if (selectedValue === 'false') {
        currentStatus = 'Open';
      } else if (selectedValue === 'true') {
        currentStatus = 'Completed';
      }

      // If all checks are passed, tasks array is updated with the new task.

      const data = {
        title: description,
        status: currentStatus,
      };

      const savedID = await database.save(data);
      const id = savedID.id;
      data.id = id;
      dispatch(addTask(data));

      // Description and status values are both set to empty strings again to re-enable checks for the next task that's added.
      setDescription('');
      setSelectedValue(statusList[0]);
    }
  };

  return (
    <Card className={`${styles.formCardWrapper}`}>
      <form
        className={`${styles.formContainer} ${styles[theme]}`}
        onSubmit={addTaskHandler}
      >
        <h2 className={`${styles.header} ${styles[theme]}`}>
          ADD A NEW TASK:{' '}
        </h2>
        {/* Conditional rendering for displaying the list of errors to 
          the users if the errorMessage array has a length greater than 0 */}
        {errorMessage.length > 0 && (
          <div className={`${styles.errorForm}`}>
            Missing Data:
            <ul>
              {errorMessage.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <div>
            <label>
              {/* Field that allows the user to enter in the description 
              that they desire for the task they're adding */}
              <input
                title='Enter a description.'
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
                <select
                  title='Choose an option.'
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
            <div className={`${styles.addButtonContainer}`}>
              <button className={`${styles.addButton}`}>Add</button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}
