import React from 'react';
import Caixinha from './Components/Caixinha/Caixinha';
import AppStyle from './AppStyle';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cor: ''
    }
  }

  trocarCor = event => {
    this.setState({
      cor: 'blue'
    });
  }

  render() {
    console.log(this.state)
    return (
      <div style={AppStyle.AppDiv}>
        <h1>Caixinhas para colorir</h1>
        <button style={AppStyle.Button} onClick={this.trocarCor}>COLORIR! eeeee</button>
        <Caixinha cor={this.state.cor} />
      </div>
    )
    
    
  }
}

export default App;
