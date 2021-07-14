import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate';
import '../stylesheets/app.css';

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

        <h2>Lets do some maths!</h2>
        <div className="container">
          <Display result={total} next={next} operation={operation} className="display" />

          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
