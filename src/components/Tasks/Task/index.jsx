/** @format */

export default function Task({ id, title, status, setTask, removeTask }) {
  return (
    <div
      className='bg-dark pt-3 rounded'
      style={{ paddingLeft: 40, width: 400 }}
    >
      <div>
        <h3 className='text-primary'>{title}</h3>
      </div>
      <div className='text-white'>{id}</div>
      <div className='text-white mb-3'>{status}</div>
      <div className=''>
        <button
          className='btn btn-info text-black'
          style={{ marginRight: 50 }}
          onClick={() => {
            setTask(id);
          }}
        >
          Change Status
        </button>
        <button
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
