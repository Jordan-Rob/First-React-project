import React, { Component } from "react";
import { BoardContext } from "./BoardContext";

class ChangeMode extends Component {
  static contextType = BoardContext;
  render() {
    const { changeMode } = this.context;
    return (
      <div>
        <button onClick={changeMode}>Change Mode</button>
      </div>
    );
  }
}
export default ChangeMode;
