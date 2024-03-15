import React, { Component } from "react";
import Child from "./Child";

export class LifeCycle extends Component {
  
  sate = {
    text: "mounting Phase",
    show: true,
  };

  constructor(props) {
    super(props);
    console.log("Constructor Excuted");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Excuted");
    return state;
  }

  render() {
    console.log("render Excuted");
    return (
      <div>
        {this.state.text}
        <button onClick={this.upadtephase("Updating Phase")}>update</button>
        {this.state.show ? <Child /> : null}
      </div>
    );
  }

  upadtephase = (data) => {
    this.setState({
      text: data,
      show: true,
    });
  };

  componentDidMount() {
    console.log("componentDidMount Excuted");
  }

  shouldComponentUpdate = () => {
    console.log("shouldComponentUpdate Excuted");
    return true;
  };

  getSnapshotBeforeUpadte = (preProps, preState) => {
    console.log("getSnapshotBeforeUpadte Excuted");
    return "scrollig position";
  };

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("componentDidUpdate Excuted");
    console.log("-----------------------------------");
    console.log("preProps", preProps);
    console.log("preState", preState);
    console.log("snapshot", snapshot);
    console.log("-----------------------------------");
  }
}

export default LifeCycle;
