import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  render() {
    return (
      <>
        <Display result="0" />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
