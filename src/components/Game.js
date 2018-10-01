import React from 'react';
import Board from './Board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component{
  constructor(){
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      stepNumber: 0, // Khởi tạo stepNumber là 0
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      stepNumber: this.state.stepNumber + 1 // Update stepNumber += 1 mỗi lần click l
    });
  }

  render(){
    const squares = this.state.squares.slice();
    const winner = calculateWinner(squares);
    let status;
    if(winner){
      status = "Winner is: " + winner; // Nếu winner có giá trị thì sẽ hiển thị người thắng cuộc
    }else if(this.state.stepNumber === 9){ // Nếu sau 9 lần chưa có ai win thì hòa
      status = "No one win"; 
    }else{
      status = "Next player is: " + (this.state.xIsNext ? 'X' : 'O');
    }
    return(
      <div>
        <div className="game"><Board squares={squares} onClick={i => this.handleClick(i)} /></div>
        <div className="game-info">
          <p>{status}</p>
        </div>
      </div>
    );
  }
}

export default Game;