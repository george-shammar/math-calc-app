import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../stylesheets/buttonpanel.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;

  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  const renderButton = (i) => (
    <Button buttonName={i} clickHandler={handleClick} color='orange' wide='true' />
  );

  return (
    <div>
      <div className="button-row">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷')}
      </div>
      <div className="button-row">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('X')}
      </div>
      <div className="button-row">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div className="button-row">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div className="button-row">
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
