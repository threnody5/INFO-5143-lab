import './styles/styles.module.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './utils/redux/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const BackgroundManager = ({ children }) => {
  const theme = useSelector((state) => state.theme.value);
  return <div theme={[theme]}>{children}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BackgroundManager>
        <Router>
          <App />
        </Router>
      </BackgroundManager>
    </Provider>
  </React.StrictMode>
);
