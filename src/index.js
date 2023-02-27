/** @format */

import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles/styles.module.scss';
import App from './App';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';

const BackgroundManager = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div className={`${styles[theme]}`}>{children}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BackgroundManager>
        <App />
      </BackgroundManager>
    </ThemeProvider>
  </React.StrictMode>
);
