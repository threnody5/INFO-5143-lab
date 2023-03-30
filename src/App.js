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
import { useEffect, useState } from 'react';
import * as database from './firebase';
import { useDispatch } from 'react-redux';
import { setTasks } from './utils/redux/tasksSlice';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await database.load();
      dispatch(setTasks(data));
      setIsLoading(false);
    })();
  }, [dispatch]);
  return (
    <>
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </>
  );
}

export default App;
