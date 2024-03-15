class Parent extends React.Component {
  render() {
    let fruits = ["apple", "mango", "kiwi"];
    return (
      <div>
        <h1>i am parent</h1>
        <Child fruits01={fruits} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    console.log("Child props:", this.props);
    return (
      <div>
        <h1>i am Child</h1>
        {/* {console.log(this.props.fruits01)} */}
        {this.props.fruits01.map((val, inx) => {
          return <li key={inx}>{val}</li>;
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Parent />
  </div>,
  document.getElementById("sample")
);
