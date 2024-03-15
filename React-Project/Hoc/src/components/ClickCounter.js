import React, {Component} from "react";
import withCounter from "../hoc/withcounter";

 class ClickCounter extends Component {
  // state = {
  //     count: 0,
  //   };
  //   increment = () => {
  //     this.setState({
  //       count: this.state.count + 5,
  //     });
  //   };
  render() {
    let { count, increment} = this.props;
    return (
      <div>
        <h1>My Name is {this.props.name}</h1>
        <h1>click counter :{count}</h1>
        <button
          onClick={() => {
            increment();
          }}
        >
          {" "}
          increment
        </button>
      </div>
    );
  }
}

// export default ClickCounter
export default withCounter(ClickCounter, 2, 2);
