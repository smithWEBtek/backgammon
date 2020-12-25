import React, { Component } from 'react';
import './Board.css';
import WhiteStripe from '../WhiteStripe/WhiteStripe';
import BlackStripe from '../BlackStripe/BlackStripe';

class Board extends Component {
  render () {
    const stripes = (
        <>
          <WhiteStripe />  
          <BlackStripe />  
        </>
      )

    return (
      <div className="board">
        <h2>The Board</h2>
        {stripes}
      </div>
    )
  }
}

export default Board;