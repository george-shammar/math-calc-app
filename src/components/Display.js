import PropTypes from 'prop-types';
import '../stylesheets/display.css';

const Display = (props) => {
  const { result, operation } = props;
  return (
    <div>
      <div className="bg-display">
        <h1 className="result">{result}</h1>
        <p>{operation}</p>
      </div>
     </div>
  );
};

Display.defaultProps = { result: '0', operation: '' };
Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
