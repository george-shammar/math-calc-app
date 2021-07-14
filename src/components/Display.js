import PropTypes from 'prop-types';
import '../stylesheets/display.css';

const Display = (props) => {
  const { result, next, operation } = props;
  return (
    <div>
      <h1>{result}</h1>
      <p>{operation}</p>
      <p>{next}</p>
    </div>
  );
};

Display.defaultProps = { result: '0' };
Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
