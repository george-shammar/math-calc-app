import PropTypes from 'prop-types';
/* eslint-disable */

function Display(props) {
  return (
    <h1>{props.result}</h1>
  );
}

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };
/* eslint-enable */

export default Display;
