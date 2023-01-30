/** @format */

import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import Form from './components/Form';

import { v4 as uuid } from 'uuid';

function App() {
  // List of hardcoded tasks.
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Change Jeep oil',
      status: 'Open',
    },
    {
      id: uuid(),
      title: 'Clean the kitchen',
      status: 'Open',
    },
    {
      id: uuid(),
      title: 'Rake the leaves',
      status: 'Open',
    },
    {
      id: uuid(),
      title: 'Cut down that dead tree',
      status: 'Open',
    },
    {
      id: uuid(),
      title: 'Clean the litter box',
      status: 'Open',
    },
    {
      id: uuid(),
      title: 'Do laundry',
      status: 'Open',
    },
  ]);
  const [description, setDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState([]);

  /**
   * Handler function for verifying user had entered required information.
   * - Description is required.
   * - Status is required.
   */
  const addTask = (e) => {
    const validate = [];
    e.preventDefault();
    if (description.length == 0) {
      validate.push('Please enter a description.');
    }
    if (selectedStatus === '') {
      validate.push('Please select a status.');
    }
    if (validate.length > 0) {
      setErrorMessage(validate);
    } else {
      setErrorMessage([]);

      setTasks([
        ...tasks,
        {
          id: uuid(),
          title: description,
          status: selectedStatus,
        },
      ]);
      setDescription('');
      setSelectedStatus('');
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
      <div>
        <Form
          description={description}
          setDescription={setDescription}
          setSelectedStatus={setSelectedStatus}
          addTask={addTask}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
}

export default App;
