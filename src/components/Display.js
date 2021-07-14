import PropTypes from 'prop-types';
import '../stylesheets/display.css';

const Display = (props) => {
  const { result, operation } = props;
  return (
    <div className="bg-display">
      <h1 className="result">{result}</h1>
      <p>{operation}</p>
    </div>
  );
};

Display.defaultProps = { result: '0' };
Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string.isRequired,
};

export default Display;
