import PropTypes from 'prop-types';
import '../stylesheets/display.css';

const Display = (props) => {
  const { result, next, operation } = props;
  return (
    <div className="bg-display">
      <h1 className="result">{result}</h1>
      <p className="result">{operation}</p>
      <p className="result">{next}</p>
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
