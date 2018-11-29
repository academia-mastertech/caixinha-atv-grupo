import React from 'react';
import Caixinha from './Components/Caixinha/Caixinha';
import AppStyle from './AppStyle';

class App extends React.Component {
  render() {
    return (
      <div style={AppStyle.AppDiv}>
        <h1>Caixinhas para colorir</h1>
        <button style={AppStyle.Button}>COLORIR! eeeee</button>
        <Caixinha />
      </div>
    )
    
    
  }
}

export default App;
