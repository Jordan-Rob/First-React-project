import React, { Component } from "react";

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
        <div className="card" style={{ width: 300 }}>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
