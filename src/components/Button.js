import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props; // destructure props declaration
  return (
    <button type="button">
      {name}
    </button>
  );
}

Button.propTypes = { name: PropTypes.string };
Button.defaultProps = { name: '' };

export default Button;
