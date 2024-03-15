class Lccopy extends React.Component {
  // constructor
  constructor(props) {
    super(props),
      (this.state = {
        text: "mounting Phase",
        show: true,
      });
    console.log("constructor excuted");
  }

  //  getDerivedStateFromProps

  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps excuted");
    return state;
  }

  render() {
    console.log("render excuted");
    return (
      <div>
        <h1> I'm parent-{this.state.text}</h1>
        <button
          onClick={() => {
            this.update("updating Phase");
          }}
        >
          update
        </button>
        {this.state.show ? <Chlid /> : null}
      </div>
    );
  }

  update(data) {
    this.setState({
      ...this.state,
      text: data,
      show: false,
    });
  }
  componentDidMount() {
    console.log("ComponentDidMount excuted");
  }
  // shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate excuted");
    return true;
  }

  // getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prestate, preprops) {
    console.log("getSnapshotBeforeUpadte excuted");
    return "scroll position";
  }

  // componentDidUpdate
  componentDidUpdate(prestate, preprops,snapshot){
    console.log("componentDidUpadte excuted");
    console.log("prestate" ,prestate);
    console.log("preprops" ,preprops);
    console.log("snapshot" ,snapshot);
  }
}

class Chlid extends React.Component {
  render() {
    return (
      <div>
        <h1>I'm child</h1>
      </div>
    );
  }

  // componentWillUnmount
  componentWillUnmount(){
    console.log("componentWillUnmount excuted");
  }
}

ReactDOM.render(<Lccopy />, document.getElementById("sample"));
