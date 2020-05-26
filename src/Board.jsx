import React, { Component } from "react";
import "./index.css";
import { BoardContext } from "./BoardContext";

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

  laysQty = () => {
    this.setState({
      lays: this.state.lays + 1,
    });
  };

  deleteLaysQty = () => {
    this.setState({
      lays: (this.state.lays = 0),
    });
  };

  pringlesQty = () => {
    this.setState({
      pringles: this.state.pringles + 1,
    });
  };

  deletePringlesQty = () => {
    this.setState({
      pringles: (this.state.pringles = 0),
    });
  };

  doritosQty = () => {
    this.setState({
      doritos: this.state.doritos + 1,
    });
  };

  deleteDoritosQty = () => {
    this.setState({
      doritos: (this.state.doritos = 0),
    });
  };

  render() {
    const { brightTheme, lightMode, darkMode } = this.context;
    const mainTheme = brightTheme ? lightMode : darkMode;
    return (
      <div>
        <div
          className="container"
          style={{ backgroundColor: mainTheme.backgroundMode }}
        >
          <div className="row">
            <div className="col col-sm-4">
              <div
                className="card shadow  mb-3 rounded"
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: mainTheme.cardbackgroundMode,
                  color: mainTheme.fontColor,
                }}
              >
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title text-center">
                    The Quantity Of Butter
                  </h5>
                  <img
                    style={{ height: 90 }}
                    src="https://res.cloudinary.com/dbureb5gj/image/upload/v1590064494/dashboard/AdobeStock_240147049_Preview-removebg-preview_jogcu3.png"
                  ></img>
                  <p className="card-text text-center">
                    {this.state.butterQuatity}
                  </p>
                  <button
                    onClick={this.butterQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton1"
                  >
                    Update Quantity
                  </button>
                  <button
                    onClick={this.deleteButterQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow  mb-3 rounded"
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: mainTheme.cardbackgroundMode,
                  color: mainTheme.fontColor,
                }}
              >
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title text-center">
                    The Price Of Butter
                  </h5>
                  <img
                    style={{ height: 90 }}
                    src="https://res.cloudinary.com/dbureb5gj/image/upload/v1590064503/dashboard/AdobeStock_324920784_Preview-removebg-preview_re34w4.png"
                  ></img>
                  <p className="card-text text-center">
                    {this.state.butterPrice}
                  </p>
                  <button
                    onClick={this.butterPrice}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton1"
                  >
                    Update Price
                  </button>
                  <button
                    onClick={this.deleteButterPrice}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow  mb-3 rounded"
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: mainTheme.cardbackgroundMode,
                  color: mainTheme.fontColor,
                }}
              >
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title text-center">
                    The Quantity Of Sugar
                  </h5>

                  <img
                    style={{ height: 90 }}
                    src="https://res.cloudinary.com/dbureb5gj/image/upload/v1590064488/dashboard/close-up-photo-of-sugar-cubes-in-glass-jar-2523650-removebg-preview_onobfc.png"
                  ></img>

                  <p className="card-text text-center">
                    {this.state.sugarCrates}
                  </p>
                  <button
                    onClick={this.sugarCrates}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton1"
                  >
                    Update Crates
                  </button>
                  <button
                    onClick={this.deleteSugarCrates}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ backgroundColor: mainTheme.backgroundMode }}
        >
          <div className="row">
            <div className="col col-sm-4">
              <div
                className="card shadow  mb-3 rounded"
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: mainTheme.cardbackgroundMode,
                  color: mainTheme.fontColor,
                }}
              >
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title text-center">lays</h5>
                  <img
                    style={{ height: 90 }}
                    src="https://res.cloudinary.com/dbureb5gj/image/upload/v1590064482/dashboard/lays_cheeseburger_ml-removebg-preview_qwri4a.png"
                  ></img>
                  <p className="card-text text-center">{this.state.lays}</p>
                  <button
                    onClick={this.laysQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton1"
                  >
                    Update Quantity
                  </button>
                  <button
                    onClick={this.deleteLaysQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow  mb-3 rounded"
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: mainTheme.cardbackgroundMode,
                  color: mainTheme.fontColor,
                }}
              >
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title text-center">pringles</h5>
                  <img
                    style={{ height: 90 }}
                    src="https://res.cloudinary.com/dbureb5gj/image/upload/v1590064475/dashboard/pringles-removebg-preview_fgygbp.png"
                  ></img>
                  <p className="card-text text-center">{this.state.pringles}</p>
                  <button
                    onClick={this.pringlesQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton1"
                  >
                    Update Price
                  </button>
                  <button
                    onClick={this.deletePringlesQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow  mb-3 rounded"
                style={{
                  width: 300,
                  height: 300,
                  backgroundColor: mainTheme.cardbackgroundMode,
                  color: mainTheme.fontColor,
                }}
              >
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title text-center">doritos</h5>
                  <img
                    style={{ height: 90 }}
                    src="https://res.cloudinary.com/dbureb5gj/image/upload/v1590064462/dashboard/doritos-removebg-preview_etm2am.png"
                  ></img>
                  <p className="card-text text-center">{this.state.doritos}</p>
                  <button
                    onClick={this.doritosQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton1"
                  >
                    Update Crates
                  </button>
                  <button
                    onClick={this.deleteDoritosQty}
                    style={{ backgroundColor: mainTheme.buttonMode }}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  static contextType = BoardContext;
}
export default Board;
