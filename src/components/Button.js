import PropTypes from 'prop-types';

const Button = (props) => {
  const { clickHandler, buttonName } = props;

  const handleClick = () => {
    clickHandler(buttonName);
  };

  return (
    <button type="button" onClick={handleClick}>
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
