import React, { Component } from 'react';
import './Board.css';
import Stripe from '../Stripe/Stripe';

class Board extends Component {
  render () {
    const stripes = (
        <>
          <Stripe />  
          {/* <BlackStripe />   */}
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