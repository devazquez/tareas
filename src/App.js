import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import image from './assets/images/checkmark.svg';

import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="menu"> </div>        
      </header>
      <main className="mx-auto" role="main">
        <div class="container">
          
          <div id='mainTareas'>
          </div>

          <div id='FormularioAgregarTarea'>
          </div>

          <div id='ListaTareas'>
          </div>


        </div>
      </main>

      <footer className="App-footer fixed-bottom">
        <div id='footer'></div>
      </footer>

    </div>
  );
}

export default App;
