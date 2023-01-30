/** @format */

export default function Form() {
  const statusList = [
    {
      status: 'Open',
      value: false,
    },
    {
      status: 'Completed',
      value: true,
    },
  ];
  return (
    <div>
      <div>
        <h2>Add a new task: </h2>
      </div>
      <div>
        <label>
          Description:
          <input
            type='text'
            placeholder='Description here'
          />
        </label>
        <span>
          <label>
            Status:
            <select>
              {statusList.map((item, index) => (
                <option
                  key={index}
                  value={item.status}
                >
                  {item.status}
                </option>
              ))}
            </select>
          </label>
        </span>
        <span>
          <button>Add</button>
        </span>
      </div>
    </div>
  );
}
