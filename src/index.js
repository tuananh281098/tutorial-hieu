import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
  render(){
    return(
      <div>Square</div>
    );
  }
}

class Board extends React.Component{
  render(){
    return(
    	<div>
      	<div>Board</div>
     		<div><Square /></div>

     	</div>
    );
  }
}

class Game extends React.Component{
  render(){
  	return(
  		<div>
     		<div>Game</div>
      	<div><Board/></div>
   	 </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
