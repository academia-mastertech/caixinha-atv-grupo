import React from 'react';
import Caixinha from './Components/Caixinha/Caixinha';
import AppStyle from './AppStyle';
import "./index.css"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      corAtual: '',
      corInput: '',
      caixa:[]
    }
    this.caixa=[<Caixinha cor={this.state.corAtual} atualizar={this.atualizarCorInput} corInput={this.state.corInput} />];
  }

  trocarCor = event => {
    this.setState({
      corAtual: this.state.corInput
    });
  }

  adicionar = event =>{
    this.caixa.push( <Caixinha cor={this.state.corAtual} atualizar={this.atualizarCorInput} corInput={this.state.corInput} />)
    this.setState({
      caixa: this.caixa
    })
  }

  atualizarCorInput = event => {
    this.setState({
      corInput: event.target.value
    });
  }

  criarCaixinha(){
    let lista=[];
    for(let i=1;i<=this.caixa.length;i++){
      lista.push(<Caixinha cor={this.state.corAtual} atualizar={this.atualizarCorInput} corInput={this.state.corInput} />);
    }
    return lista;
  }
  render() {
    console.log(this.state)
    return (
      <div style={AppStyle.AppDiv}>
        <h1>Caixinhas para colorir</h1>
        <div className="botoes">
          <button style={AppStyle.Button} onClick={this.adicionar}>Adicionar Caixinha</button>
          <button style={AppStyle.Button} onClick={this.trocarCor}>COLORIR! eeeee</button>
        </div>
          {this.criarCaixinha()} 
      </div>
    )
    
    
  }
}

export default App;
