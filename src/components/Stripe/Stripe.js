import React, { Component } from "react";
import "./Stripe.css";
// import * as d3 from "d3";

class Stripe extends Component {
  render() {
    const triangle = (
      <div className="triangle-container">
        <svg height="500" width="500">
          <polygon points="150,60 200,400 100,400" className="triangle" />
          <polygon points="250,60 200,400 300,400" className="triangle" />
          <polygon points="350,60 300,400 400,400" className="triangle" />
          <polygon points="450,60 400,400 500,400" className="triangle" />
 
        </svg>
      </div>
    );

    return <>{triangle}</>;
  }
}

export default Stripe;
