import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStartStopPress = this.handleStartStopPress.bind(this)
    this.handleClearPress = this.handleClearPress.bind(this)
    this.state = {
      second: 0,
      running: false
    
    }
    
  }
  
handleStartStopPress() {
    // if watch is running clear interval and set running to false
        if(this.state.running !== false) {
            clearInterval(this.increment)
            this.setState({
                running:false
            })
           
           
            
        }
    // if wathc is NOT running, set interval to increment second by 1 and set running to true every 1000 ms
        else {
            this.increment = setInterval( () =>
            this.setState({
                second : this.state.second+1,
                running:true
            }),1000
            )
        }
    
  }

  handleClearPress() {
    // if watch is running, do nothing
    // if watch is NOT running, set second to 0
    if(this.state.running === false){
        this.setState({
            second:0
        })
    }
  }
  
  

  render() {
    // follow the LoginControl example
    const isRunning = this.state.running
    let button

     if(!isRunning) {
        button = <StartButton onClick={this.handleStartStopPress} />;
      } else {
        button = <StopButton onClick={this.handleStartStopPress} />;
      }
     return (
       <div>
        <h1>{this.state.second}</h1>
        {button}
        <ClearButton onClick={this.handleClearPress}/>
       </div>
    )
  
    
  }
}

function StartButton(props) {
    return (
      <button onClick={props.onClick}>
        Start
      </button>
    );
  }
  
  function StopButton(props) {
    return (
      <button onClick={props.onClick}>
        Stop
      </button>
    );
  }

  function ClearButton(props){
      return(
          <button onClick={props.onClick}>
            Clear
          </button>
      )
  }

 ReactDOM.render(<App/>,document.getElementById('root'))

 registerServiceWorker();