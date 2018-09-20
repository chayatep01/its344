import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/*

const performMagic = () => {
  alert('TAADAH !')
}

class ChildComponent extends Component{
  

  render() {
    return (
      <div>
        <div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>
        <button onClick={performMagic}>Do Magic</button>
      </div>
    );
  }
}

class ParentComponent extends Component {
  performMagic() {
    alert('TAADAH!');
  }

  render() {
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('root')
);


*/

class Board extends Component{
  render() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}






class BoardSwitcher extends Component{
  
  constructor(){
    super()
    this.state = {
      indexSelected:0
    }
  }

  toggleClick() {
    console.log('its run')
  this.setState({
    indexSelected:(this.state.indexSelected < this.props.numBoards - 1) ? this.state.indexSelected + 1 : 0
  })
}

  render() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      var isSelected = ii === this.state.indexSelected;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={()=> this.toggleClick()}>Toggle</button>
      </div>
    );
  }
}

ReactDOM.render(
  <BoardSwitcher numBoards={3} />,
  document.getElementById('root')
)

registerServiceWorker();