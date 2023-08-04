import './Button.css';

const Button = function ({ onClick, children }) {
  return (
    <button
      className="button-main"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
