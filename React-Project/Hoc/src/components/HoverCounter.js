
import React, { Component } from "react";
import WithCounter from "../hoc/withcounter";

export class HoverCounter extends Component {
  // state = {
  //     count: 0,
  //   };

  //   increment = () => {
  //     this.setState({
  //       count: this.state.count + 5,
  //     });
  //   };
  render() {
    let { count, increment } = this.props;
    return (
      <div>
        <h1
          onMouseOver={() => {
            increment();
          }}
        >
          Hover counter :{count}
        </h1>
      </div>
    );
  }
}

export default WithCounter(HoverCounter, 10, 10);
