import React, { Component } from 'react';
import './Board.css';
import StripesBottomLeft from '../Stripes/StripesBottomLeft';
import StripesBottomRight from '../Stripes/StripesBottomRight';
import StripesUpperLeft from '../Stripes/StripesUpperLeft';
import Bar from '../Bar/Bar';

class Board extends Component {
  render () {
      return (
        <>
          <h2>Backgammon</h2>
        <div className="board">
          <StripesUpperLeft />  
          <StripesBottomLeft />  
          <Bar />
          <StripesBottomRight />
      </div>
      </>
      )
    }
}

export default Board;