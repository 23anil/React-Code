class Parent extends React.Component {
  constructor(props) {
    // used to initialise and bind
    super(props);
    this.state = {
      text: "mounting phase",
      show: true,
    };
    console.log("parent constructor excuted");
  }

  static getDerivedStateFromProps(props, state) {
    // return new state or if no change is required in state then return null
    console.log("parent getDerivedStateFromProps excuted");
    return state;
  }
  render() {
    // return jsx and no side effects & should not Update state in render
    console.log("parent render excuted");
    return (
      <div>
        <h1>I M Parent : {this.state.text}</h1>
        <button
          onClick={() => {
            this.updateText("Updating Phase");
          }}
        >
          click
        </button>
        {this.state.show ? <Child /> : null}
      </div>
    );
  }
  updateText(text) {
    this.setState({
      text: text,
      show: false,
    });
  }
  shouldComponentUpdate() {
    console.log("parent shouldComponentUpdate excuted");
    return true;
  }
  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log("parent getSnapshotBeforeUpadte excuted");
    return "scrolling position";
  }

  componentDidUpdate(preProps, prevState, snapshot) {
    console.log("parent componentDidUpdate excuted");
    console.log("-----------------------------------");
    console.log("preProps", preProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
    console.log("-------------------------------");
  }
  componentDidMount() {
    // first time mounting to real dom
    // 1. used to make side effects i.e making api calls,interacting with dom
    // 2. used to update the state
    console.log("parent componentDidMount excuted");
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <h2>I M child Component</h2>
      </div>
    );
  }
  componentWillUnmount() {
    console.log("child componentWillUnmount excuted");
  }
}

ReactDOM.render(<Parent />, document.getElementById("sample"));
