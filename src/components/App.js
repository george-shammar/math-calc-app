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

  handleClick(buttonName) {
    /* eslint-disable */
    const result = calculate(buttonName, this.state);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { result } = this.state;
    return (
      <>
        <Display result={result} />

        <ButtonPanel onClick={this.handleClick}/>
      </>
    );
  }
}

export default App;
