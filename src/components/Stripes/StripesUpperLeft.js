import React, { Component } from "react";
import "./StripesUpperLeft.css";

class StripesUpperLeft extends Component {
  render() {
    const section = (
      <div className="section-upper-left">
        <svg height="500" width="400">
          <polygon id="1" points="75,190 100,40 50,40" className="triangle-black" />
          <polygon id="2" points="125,190 100,40 150,40" className="triangle-white" />
          <polygon id="3" points="175,190 150,40 200,40" className="triangle-black" />
          <polygon id="4" points="225,190 200,40 250,40" className="triangle-white" />
          <polygon id="5" points="275,190 250,40 300,40" className="triangle-black" />
          <polygon id="6" points="325,190 300,40 350,40" className="triangle-white" />
        </svg>
      </div>
    );

    return <>{section}</>;
  }
}

export default StripesUpperLeft;
