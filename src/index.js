/** @format */

// import styles from './styles/styles.module.scss';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';

const BackgroundManager = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      theme={[theme]}
      // className={`${styles[theme]}`}
    >
      {children}
    </div>
  );
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
