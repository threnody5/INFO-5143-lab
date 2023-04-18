import { useEffect, useState } from 'react';
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
import Spinner from './components/Spinner';
import ErrorMessage from './components/ErrorMessage';
import * as restAPI from './restapi';
import { useDispatch } from 'react-redux';
import { loadTasks } from './utils/redux/tasksSlice';

function App() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const result = await restAPI.read();
      if (result.success) {
        dispatch(loadTasks(result.data));
      } else {
        setError(result.error);
      }
      setIsLoading(false);
    })();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Spinner show={isLoading} />
      <ErrorMessage error={error} />
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
