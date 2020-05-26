import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css/";
import Board from "./Board";
import BoardContextProvider from "./BoardContext";
import ChangeMode from "./ChangeMode";

class App extends Component {
  render() {
    return (
      <div>
        <BoardContextProvider>
          <Board />
          <ChangeMode />
        </BoardContextProvider>
      </div>
    );
  }
}
export default App;
