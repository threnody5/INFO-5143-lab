/** @format */

import { useContext } from 'react';

import { ThemeContext } from './../ThemeContext';

import styles from './styles.module.scss';

/**
 * Card wrapper that receives a specified className from the component.
 * @param {string} props
 * @returns Styling for each component that has a card background.
 */
const Card = (props) => {
  const { theme } = useContext(ThemeContext);
  const classes = `${styles.cardContainer} ${styles[theme]} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
