/** @format */

// import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Form from './components/Form';
import AddingTasks from './pages/Help/AddingTasks';
import ChangingStatus from './pages/Help/ChangingStatus';
import RemovingTasks from './pages/Help/RemovingTasks';
import HelpInformation from './pages/Help/HelpInformation';
import PageNotFound from './pages/PageNotFound';
import TaskCounter from './components/Tasks/TaskCounter';
import { Routes, Route } from 'react-router-dom';
import HelpContainer from './pages/Help/HelpContainer';
// import styles from './styles/styles.module.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Tasks />}
        />
        <Route
          path='add-task'
          element={<Form />}
        />
        <Route
          path='task-counter'
          element={<TaskCounter />}
        />

        <Route
          path='help'
          element={<HelpContainer />}
        >
          <Route
            path=''
            element={<HelpInformation />}
          />
          <Route
            path='adding-tasks'
            element={<AddingTasks />}
          />
          <Route
            path='changing-status'
            element={<ChangingStatus />}
          />
          <Route
            path='removing-tasks'
            element={<RemovingTasks />}
          />
        </Route>
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
