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
      </div>
    );
  }
}
/* eslint-enable */
export default ButtonPanel;
