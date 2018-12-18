import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const drumpad = [
  {
    key: 'q',
    keycode: 81,
    id: 'string 1',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+1.wav'
  },
  {
    key: 'w',
    keycode: 87,
    id: 'string 2',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+2.wav'
  },
  {
    key: 'e',
    keycode: 69,
    id: 'string 3',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+3.wav'
  },
  {
    key: 'a',
    keycode: 65,
    id: 'string 4',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+4.wav'
  },
  {
    key: 's',
    keycode: 83,
    id: 'string 5',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+5.wav'
  },
  {
    key: 'd',
    keycode: 68,
    id: 'string 6',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+6.wav'
  },  {
    key: 'z',
    keycode: 90,
    id: 'string 7',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+7.wav'
  },  {
    key: 'x',
    keycode: 88,
    id: 'string 8',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+8.wav'
  },  {
    key: 'c',
    keycode: 67,
    id: 'string 9',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+9.wav'
  },
]

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