import React from 'react';
import CaixinhaStyle from './CaixinhaStyle';

class Caixinha extends React.Component {
  render() {
    const divStyle = {
      ...CaixinhaStyle.Caixinha,
      backgroundColor: this.props.cor
    }

    return (
      <div style={divStyle}>
        <input style={CaixinhaStyle.Input} type='text' placeholder='COLOR' />
      </div>
    );
  }
}

export default Caixinha;
