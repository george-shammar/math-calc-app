import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props; //destructure props declaration
  return (
    <h1>{result}</h1>
  );
}

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };

export default Display;
