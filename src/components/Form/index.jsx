import styles from './styles.module.scss';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from '../../utils/redux/tasksSlice';
import * as restAPI from './../../restapi';
import { v4 as uuid } from 'uuid';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';

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
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
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
    setIsSaving(true);
    const validate = [];
    // Checks for description variable string length, if length is 0, then it pushes the message to the validate array.
    if (description.length === 0) {
      validate.push('Please enter a description.');
    }
    // Checks for selected status variable string contents, if string is empty, it pushes the message to the validate array.
    if (selectedValue !== 'true' && selectedValue !== 'false') {
      validate.push('Please select a status.');
    }

    let currentStatus;
    // Uses boolean values to determine whether the currentStatus should be set to 'Open' or 'Completed'.
    if (selectedValue === 'false') {
      currentStatus = 'Open';
    } else if (selectedValue === 'true') {
      currentStatus = 'Completed';
    }

    // If all checks are passed, tasks array is updated with the new task.
    const data = {
      id: uuid(),
      description: description,
      done: currentStatus,
    };

    const result = await restAPI.add(data);

    if (result.success) {
      dispatch(addTask(data));
      setError('');
    } else {
      setError(result.error);
    }

    // Description and status values are both set to empty strings again to re-enable checks for the next task that's added.
    setIsSaving(false);
    setDescription('');
    setSelectedValue(statusList[0]);
  };
  // };

  return (
    <>
      <Spinner
        show={isSaving}
        text='Saving...'
      />
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
          <ErrorMessage error={error} />
          {/* {errorMessage.length > 0 && (
          <div className={`${styles.errorForm}`}>
            Missing Data:
            <ul>
              {errorMessage.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )} */}
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
    </>
  );
}
