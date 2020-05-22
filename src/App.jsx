import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css/";
import Board from "./Board";
import BoardContextProvider from "./BoardContext";

class App extends Component {
  render() {
    return (
      <div>
        <BoardContextProvider>
          <Board />
        </BoardContextProvider>
      </div>
    );
  }
}
export default App;
