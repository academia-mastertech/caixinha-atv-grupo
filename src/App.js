import React from 'react';
import Caixinha from './Components/Caixinha/Caixinha';
import AppStyle from './AppStyle';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      corAtual: '',
      corInput: ''
    }
  }

  trocarCor = event => {
    this.setState({
      corAtual: this.state.corInput
    });
  }

  atualizarCorInput = event => {
    this.setState({
      corInput: event.target.value
    });
  }

  render() {
    console.log(this.state)
    return (
      <div style={AppStyle.AppDiv}>
        <h1>Caixinhas para colorir</h1>
        <button style={AppStyle.Button} onClick={this.trocarCor}>COLORIR! eeeee</button>
        <Caixinha cor={this.state.corAtual} atualizar={this.atualizarCorInput} corInput={this.state.corInput} />
      </div>
    )
    
    
  }
}

export default App;
