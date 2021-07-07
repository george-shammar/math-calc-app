import React from 'react';
import Button from './Button';

function renderButton(i) {
  return (
    <Button name={i} />
  );
}

function ButtonPanel() {
  return (
    <div>
      <div>
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷')}
      </div>
      <div>
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('X')}
      </div>
      <div>
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div>
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div>
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
}

export default ButtonPanel;
