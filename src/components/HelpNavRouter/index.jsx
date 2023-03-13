/** @format */

import { Link } from 'react-router-dom';

const HelpNavRouter = () => {
  return (
    <>
      <Link to='./'>Help Information</Link>
      <Link to='adding-tasks'>Adding Tasks</Link>
      <Link to='changing-status'>Change Status</Link>
      <Link to='removing-tasks'>Removing Tasks</Link>
    </>
  );
};

export default HelpNavRouter;
