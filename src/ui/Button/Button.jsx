import './Button.css';

const Button = function ({ type = 'primary', onClick, children }) {
  const typeClass =
    type === 'primary'
      ? 'button-primary'
      : type === 'secondary'
      ? 'button-secondary'
      : '';

  return (
    <button
      className={`${typeClass} button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
