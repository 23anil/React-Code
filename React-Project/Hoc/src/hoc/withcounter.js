import React, { Component } from "react";
import { useState } from "react";
let withCounter = (WrappedComponent, initialvalue = 0, incrementvalue = 1) => {
  // class EnahanceComponent extends Component {
  //   state = { count: initialvalue };
  //   increment = () => {
  //     this.setState({
  //       count: this.state.count + incrementvalue,
  //     });
  //   };
  //   render() {
  //     return (
  //       <WrappedComponent
  //         count={this.state.count}
  //         increment={this.increment}
  //         // important , to retain the other props
  //         {...this.props}
  //       />
  //     );
  //   }
  // }
  // return EnahanceComponent;

  function EnahanceComponent(props) {
    const [count, setcount] = useState(initialvalue);
    let increment = () => {
      setcount(() => count + incrementvalue);
    };

    return <WrappedComponent count={count} increment={increment} {...props}/>;
  }
   return EnahanceComponent;
};
export default withCounter;
