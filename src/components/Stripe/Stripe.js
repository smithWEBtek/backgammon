import React, { Component } from "react";
import "./Stripe.css";
// import * as d3 from "d3";

class Stripe extends Component {
  render() {
    const triangle = (
      <div className="triangle-container">
        <svg height="500" width="1000">
          <polygon id="1" points="75,190 100,400 50,400" className="triangle-black" />
          <polygon id="2" points="125,190 100,400 150,400" className="triangle-white" />
          <polygon id="3" points="175,190 150,400 200,400" className="triangle-black" />
          <polygon id="4" points="225,190 200,400 250,400" className="triangle-white" />
          <polygon id="5" points="275,190 250,400 300,400" className="triangle-black" />
          <polygon id="6" points="325,190 300,400 350,400" className="triangle-white" />
        </svg>
      </div>
    );

    return <>{triangle}</>;
  }
}

export default Stripe;
