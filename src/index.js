/** @format */

import './styles/styles.module.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';

const BackgroundManager = ({ children }) => {
  const theme = useSelector((state) => state.theme.value);
  return <div theme={[theme]}>{children}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BackgroundManager>
        <App />
      </BackgroundManager>
    </Provider>
  </React.StrictMode>
);
