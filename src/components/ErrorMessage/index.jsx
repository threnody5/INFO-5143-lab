import './styles.scss';

const ErrorMessage = ({ error }) => {
  return (
    <div className='error-message-component'>
      <div className='title'>Error</div>
      <div className='text'>{error}</div>
    </div>
  );
};

export default ErrorMessage;
