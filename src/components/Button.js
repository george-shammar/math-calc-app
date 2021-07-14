import PropTypes from 'prop-types';
import '../stylesheets/button.css';

const Button = (props) => {
  const { clickHandler, buttonName, color, wide } = props;

  const handleClick = () => {
    clickHandler(buttonName);
  };

  return (
    <button type="button" onClick={handleClick} className="button">
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
Button.defaultProps = {
  buttonName: null,
};

export default Button;
