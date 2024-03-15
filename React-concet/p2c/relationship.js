class Parent extends React.Component {
  render() {
    let gift = "Bmw car";
    let momsgift = "apple mobile";
    return (
      <div>
        <h1>i am parent</h1>
        <Child driver={gift} mg={momsgift} />
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
        <h1>My Dad gift is :{this.props.driver}</h1>
        <h1>My mom-gift is :{this.props.mg}</h1>
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
