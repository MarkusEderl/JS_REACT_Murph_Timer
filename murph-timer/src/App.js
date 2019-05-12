import React from 'react';
import Header from './components/Header'
import Body from './components/Form'
import './App.css'

function App() {
  return (
    <div className="App" style={appstyle}>
     <Header></Header>
     <br></br>
     <Body></Body>
    </div>
  );
}

const appstyle = {
  position: 'absolute',
  height: "100%",
  width: "100%",
  left: "0"
}


export default App;
