import React, { Component } from "react";
import "./index.css";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      butterQuatity: 67,
      butterPrice: 455,
      sugarCrates: 44,
      sugarQuantity: 400,
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <div>
        <div className="card shadow  mb-3 rounded" style={{ width: 300 }}>
          <div className="card-body">
            <h5 className="card-title text-center">The Quantity Of Butter</h5>
            <p className="card-text text-center">{this.state.butterQuatity}</p>
            <button className="butterButton1">Update Quantity</button>
            <button className="butterButton2">Delete Value</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
