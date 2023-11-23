import React from "react";
import Routes from './Routes';
import Nav from "./Nav";
import './App.css'

export default App;

function App() {
    return (
        <div className="App">
          <Nav />
          <Routes />
        </div>
      );
}