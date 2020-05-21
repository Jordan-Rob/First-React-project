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
      lays: 2,
      pringles: 3,
      doritos: 2,
    };
  }

  butterQty = () => {
    this.setState({
      butterQuatity: this.state.butterQuatity + 1,
    });
  };

  deleteButterQty = () => {
    this.setState({
      butterQuatity: (this.state.butterQuatity = 0),
    });
  };

  butterPrice = () => {
    this.setState({
      butterPrice: this.state.butterPrice + 1,
    });
  };

  deleteButterPrice = () => {
    this.setState({
      butterPrice: (this.state.butterPrice = 0),
    });
  };

  sugarCrates = () => {
    this.setState({
      sugarCrates: this.state.sugarCrates + 1,
    });
  };

  deleteSugarCrates = () => {
    this.setState({
      sugarCrates: (this.state.sugarCrates = 0),
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-sm-4">
              <div className="card shadow  mb-3 rounded" style={{ width: 300 }}>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Quantity Of Butter
                  </h5>
                  <p className="card-text text-center">
                    {this.state.butterQuatity}
                  </p>
                  <button onClick={this.butterQty} className="butterButton1">
                    Update Quantity
                  </button>
                  <button
                    onClick={this.deleteButterQty}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div className="card shadow  mb-3 rounded" style={{ width: 300 }}>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Price Of Butter
                  </h5>
                  <p className="card-text text-center">
                    {this.state.butterPrice}
                  </p>
                  <button onClick={this.butterPrice} className="butterButton1">
                    Update Price
                  </button>
                  <button
                    onClick={this.deleteButterPrice}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div className="card shadow  mb-3 rounded" style={{ width: 300 }}>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Quantity Of Crates
                  </h5>
                  <p className="card-text text-center">
                    {this.state.sugarCrates}
                  </p>
                  <button onClick={this.sugarCrates} className="butterButton1">
                    Update Crates
                  </button>
                  <button
                    onClick={this.deleteSugarCrates}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-sm-4">
              <div className="card shadow  mb-3 rounded" style={{ width: 300 }}>
                <div className="card-body">
                  <h5 className="card-title text-center">lays</h5>
                  <p className="card-text text-center">{this.state.lays}</p>
                  <button className="butterButton1">Update Quantity</button>
                  <button className="butterButton2">Delete Value</button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div className="card shadow  mb-3 rounded" style={{ width: 300 }}>
                <div className="card-body">
                  <h5 className="card-title text-center">pringles</h5>
                  <p className="card-text text-center">{this.state.pringles}</p>
                  <button className="butterButton1">Update Price</button>
                  <button className="butterButton2">Delete Value</button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div className="card shadow  mb-3 rounded" style={{ width: 300 }}>
                <div className="card-body">
                  <h5 className="card-title text-center">doritos</h5>
                  <p className="card-text text-center">{this.state.doritos}</p>
                  <button className="butterButton1">Update Crates</button>
                  <button className="butterButton2">Delete Value</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
