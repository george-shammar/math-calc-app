import React from 'react';
import Button from './Button';
/* eslint-disable */
class ButtonPanel extends React.Component {
  renderButton(i) {
    return (
      <Button name = { i } />
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div>
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('X')}
        </div>
        <div>
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
      </div>
    );
  }
}
/* eslint-enable */
export default ButtonPanel;
