import React from 'react';
import CaixinhaStyle from './CaixinhaStyle';

class Caixinha extends React.Component {
  render() {
    return (
      <div style={CaixinhaStyle.Caixinha}>
        <input style={CaixinhaStyle.Input} type='text' placeholder='COLOR' />
      </div>
    );
  }
}

export default Caixinha;
