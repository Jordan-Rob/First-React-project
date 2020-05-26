import React, { Component } from "react";

export const BoardContext = React.createContext();

class BoardContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      brightTheme: true,
      lightMode: {
        fontColor: "#5c5c5c",
        backgroundMode: "#f5f7fa",
        buttonMode: "#2892d7",
      },
      darkMode: {
        fontColor: "#FF944A",
        backgroundMode: "#03081D",
        cardbackgroundMode: "#232C3E",
        buttonMode: "#FF944A",
      },
    };
  }

  changeMode = () => {
    this.setState({
      brightTheme: !this.state.brightTheme,
    });
  };

  render() {
    return (
      <div>
        <BoardContext.Provider
          value={{ ...this.state, changeMode: this.changeMode }}
        >
          {this.props.children}
        </BoardContext.Provider>
      </div>
    );
  }
}
export default BoardContextProvider;
