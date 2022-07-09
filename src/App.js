import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jackie",
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, {this.state.name} I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: "Bata" };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
