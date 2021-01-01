import React, { Component } from 'react';
import './Board.css';
import StripesBottomLeft from '../Stripes/StripesBottomLeft';
import StripesBottomRight from '../Stripes/StripesBottomRight';
import Bar from '../Bar/Bar';

class Board extends Component {
  render () {
      return (
        <>
          <h2>The Board</h2>
        <div className="board">
          <StripesBottomLeft />  
          <Bar />
          <StripesBottomRight />
      </div>
      </>
      )
    }
}

export default Board;