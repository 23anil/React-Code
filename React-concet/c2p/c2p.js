class Parent extends React.Component {
  state = {
    mychildgift: "",
  };

  getgiftfromchild = (gift) => {
    console.log("childgift to parent", gift);
    this.setState({
      mychildgift: gift,
    });
  };
  render() {
    return (
      <div>
        <h1>i'm parent</h1>
        <h1>my child gift {this.state.mychildgift}</h1>
        <Child getgiftfromchild={this.getgiftfromchild} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    console.log("child props",this.props);
    let gift = "rado couple Watch";
    return(
      <div>
        <h1>i'm child</h1>
        <button
          onClick={() => {
            this.props.getgiftfromchild(gift);
          }}
        >
          send gift
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
