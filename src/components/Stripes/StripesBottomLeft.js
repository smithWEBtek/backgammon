import React, { Component } from "react";
import "./StripesBottomLeft.css";

class StripesBottomLeft extends Component {
  render() {
    const section = (
      <div className="section-bottom-left">
        <svg height="500" width="400">
          <polygon id="1" points="75,190 100,400 50,400" className="triangle-black" />
          <polygon id="2" points="125,190 100,400 150,400" className="triangle-white" />
          <polygon id="3" points="175,190 150,400 200,400" className="triangle-black" />
          <polygon id="4" points="225,190 200,400 250,400" className="triangle-white" />
          <polygon id="5" points="275,190 250,400 300,400" className="triangle-black" />
          <polygon id="6" points="325,190 300,400 350,400" className="triangle-white" />
        </svg>
      </div>
    );

    return <>{section}</>;
  }
}

export default StripesBottomLeft;
