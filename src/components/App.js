import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const data = this.state;
    const calculus = calculate(data, buttonName);
    this.setState({
      total: calculus.total,
      next: calculus.next,
      operation: calculus.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={total} next={next} operation={operation} />

        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
