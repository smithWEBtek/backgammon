import React, { Component } from "react";
import "./Stripe.css";
// import * as d3 from "d3";

class Stripe extends Component {
  render() {
    const triangle = (
      <div className="triangle-container">
        <svg height="500" width="500">
          <polygon points="150,60 100,400 200,400" className="triangle" />
        </svg>
      </div>
    );

    return <>{triangle}</>;
  }
}

export default Stripe;
