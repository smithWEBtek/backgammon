import React, { Component } from "react";
import "./StripesBottomRight.css";

class StripesBottomRight extends Component {
  render() {
    const triangle = (
      <div className="section-bottom-right">
      {/* <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">  */}
      <svg height="500" width="700">
        <polygon id="7" points="75,190 50,400 100,400" className="triangle-black" />
        <polygon id="8" points="125,190 100,400 150,400" className="triangle-white" />
        <polygon id="9" points="175,190 150,400 200,400" className="triangle-black" />
        <polygon id="10" points="225,190 200,400 250,400" className="triangle-white" />
        <polygon id="11" points="275,190 250,400 300,400" className="triangle-black" />
        <polygon id="12" points="325,190 300,400 350,400" className="triangle-white" />
      </svg>
    </div>
    );

    return <>{triangle}</>;
  }
}

export default StripesBottomRight;












