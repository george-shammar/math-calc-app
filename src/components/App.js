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
    const calculus = calculate(buttonName, data);
    this.setState({
      ...calculus,
      // total: calculus.total,
      // next: calculus.next,
      // operation: calculus.operation,
    });
  }

  render() {
    const { total, next } = this.state;
    const result = next ? next && next.toString() : total && total.toString();
    console.log(this.state);
    return (
      <>
        <Display result={result} />

        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
