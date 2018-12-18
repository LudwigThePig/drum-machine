import React, { Component } from 'react';
import './App.css';

const drumpad = [
  {
    key: 'Q',
    keycode: 81,
    id: 'string 1',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+1.wav'
  },
  {
    key: 'W',
    keycode: 87,
    id: 'string 2',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+2.wav'
  },
  {
    key: 'E',
    keycode: 69,
    id: 'string 3',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+3.wav'
  },
  {
    key: 'A',
    keycode: 65,
    id: 'string 4',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+4.wav'
  },
  {
    key: 'S',
    keycode: 83,
    id: 'string 5',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+5.wav'
  },
  {
    key: 'D',
    keycode: 68,
    id: 'string 6',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+6.wav'
  },  {
    key: 'Z',
    keycode: 90,
    id: 'string 7',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+7.wav'
  },  {
    key: 'X',
    keycode: 88,
    id: 'string 8',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+8.wav'
  },  {
    key: 'C',
    keycode: 67,
    id: 'string 9',
    sound: 'https://s3-ap-southeast-2.amazonaws.com/fcc-wav/String+9.wav'
  },
]

class App extends Component{
  render(){
    return(
      <div>
        <Machine />
      </div>
    )
  }
}
export default App;

class Pad extends Component{
  constructor(){
    super();
    this.handleKeydown = this.handleKeydown.bind(this); 
    this.playAudio = this.playAudio.bind(this);
    this.visualEffect = this.visualEffect.bind(this);
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeydown)
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeydown)
  }
  handleKeydown(e){
    if(e.keyCode == this.props.keyCode){
      this.playAudio();
    }
  }
  playAudio(){
    let a = document.getElementById(this.props.a);
    a.currentTime = 0;
    a.play();
    this.visualEffect();
  }
  visualEffect(){
    let id = document.getElementById(this.props.keyId);
    let display = document.getElementById('display');
    //use setTimeout 0 to avoid crowding the call stack on a non essential tasks
    setTimeout(()=>{
      id.style.background ='#688E26';
      display.innerHTML = this.props.keyId + ' SOUND';

    }, 0);
    setTimeout(()=>{id.style.background ='#F44708';}, 200);
  }

  render(){
    return ( 
      <div className="drum-pad" id={this.props.keyId} key={this.props.id} onClick={this.playAudio} >
        <p>{this.props.keyId}</p>
        <audio id={this.props.a} src={this.props.audio} type='audio/wav'> </audio>
      </div> 
    );
  }
}

class Machine extends Component{
  render(){
    const pad = drumpad.map((obj, i, arr)=>{
    return ( 
      <Pad 
        keyId={arr[i].key} 
        audio={arr[i].sound} 
        keyCode={arr[i].keycode}
        a={arr[i].key + '-a'} /> 
      )
    });
    return(
      <div id='drum-machine'>
        <h1><span className='line'>Drum</span> String Machine</h1>
        <div id='display-wrapper'>
          <p id='display'>DISPLAY SOMETHING</p>
        </div>
        <div id='pad-grid'>
          {pad}
        </div>
      </div>
    )
  }
}