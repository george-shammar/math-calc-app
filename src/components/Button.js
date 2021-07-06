import PropTypes from 'prop-types';
/* eslint-disable */
function Button(props) {
  return (
    <button>
      {props.name}
    </button>
  );
}
/* eslint-enable */
Button.propTypes = { name: PropTypes.string };
Button.defaultProps = { name: '' };

export default Button;
