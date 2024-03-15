import React, { Component } from "react";
import RegComp from "./RegComp";
import FuncComp from "./FuncComp";

export class Parent extends Component {
  state = {
    name: "raju",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "raju",
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <RegComp  uname={this.state.name}/>
        <FuncComp uname={this.state.name}/>
      </div>
    );
  }
}

export default Parent;
