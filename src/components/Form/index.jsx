/** @format */

import './style.css';

export default function Form({
  addTask,
  description,
  setDescription,
  setSelectedStatus,
  errorMessage,
}) {
  const statusList = [
    {
      status: 'Open',
    },
    {
      status: 'Completed',
    },
  ];

  return (
    <div
      id='new-task-container'
      className='container'
    >
      <form className='mt-3 mb-3 bg-dark rounded'>
        <div className='container-fluid'>
          <h2
            id='add-task-text'
            className='text-white'
          >
            Add a new task:{' '}
          </h2>
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
          id='add-task-field'
          className='container'
        >
          <div className='form-group'>
            <label className='text-white'>
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
              <label className='text-white'>
                Status:
                <select className='form-control'>
                  <option value=''>-- Select --</option>
                  {statusList.map((item, index) => (
                    <option
                      key={index}
                      value={item.status}
                      onClick={(e) => {
                        setSelectedStatus(e.target.value);
                      }}
                    >
                      {item.status}
                    </option>
                  ))}
                </select>
              </label>
            </span>
            <div>
              <button
                className='btn btn-primary'
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
