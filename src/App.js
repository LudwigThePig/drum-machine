import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Machine />
      </div>
    )
  }
}
export default App;

class Machine extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div id='drum-machine'>
        <div id='pad-grid'>
          <div id='Q' className='drum-pad'>
            <p>Q</p>
          </div>
          <div id='W' className='drum-pad'>
            <p>W</p>
          </div>
          <div id='E' className='drum-pad'>
            <p>E</p>
          </div>
          <div id='A' className='drum-pad'>
            <p>A</p>
          </div>
          <div id='S' className='drum-pad'>
            <p>S</p>
          </div>
          <div id='D' className='drum-pad'>
            <p>D</p>
          </div>
          <div id='Z' className='drum-pad'>
            <p>Z</p>
          </div>
          <div id='X' className='drum-pad'>
            <p>X</p>
          </div>
          <div id='C' className='drum-pad'>
            <p>C</p>
          </div>
        </div>
        <p id='display'>DISPLAY SOMETHING</p>
      </div>
    )
  }
}