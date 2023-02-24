/** @format */

import './styles.scss';

/**
 * Card wrapper that receives a specified className from the component.
 * @param {string} props
 * @returns Styling for each component that has a card background.
 */
const Card = (props) => {
  const classes = 'card-container ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
