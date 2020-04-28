import React from 'react';
import ReactDOM from 'react-dom';
import Features from './features.js';
import {Helmet} from 'react-helmet';
import Button from '@material-ui/core/Button';

import './index.css';
import './fonts/Bangers/Bangers-Regular.ttf';



function Square (props) {
  return (
      <button
        className="square"
        onClick={props.onClick}
        style={props.style}
        >
          {props.value}
      </button>
    );
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,

    };
  }

  handleCLick(i) {
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleCLick(i)}
      />
    );
  }

  restart(){

    const squares = this.state.squares.fill(null);

    this.setState({
      squares: squares,
      xIsNext: true
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      if(winner === 'Cats Game!'){
        status = winner;
      }else{
        status = 'Winner: ' + winner;
      }

    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="parent">



        <div className="status">{status}</div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div style={{margin:20}}>
          <Button onClick={() => this.restart()}>Restart</Button>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <Board />
        <Features />
      </div>

    );
  }
}

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
    }else if(squares.every((x, i) => x === 'X' || x === 'O')){
      return 'Cats Game!';
    }
  }
  return null;
}

// ========================================

ReactDOM.render(

  <Game />,
  document.getElementById('root')
);
