class Welcome extends React.Component {
  state = {
    uname: "anil",
    age: 18,
    eyecolor: "green",
  };

  changedata() {
    // never mutate the state like this
    // console.log("before change",this.state.uname);
    // this.state.uname="vijay"
    // console.log("after change",this.state.uname);

    // mutate the state like this
    //setstate is asynchronous
    console.log("before change", this.state.uname);
    this.setState(
      {
        uname: "sunil",
        age: 27,
        eyecolor: "blue",
      },
      () => {
        console.log("after change", this.state.uname);
      }
    );
  }
  render(){
    return(
        <div>
            <h1>hello.{this.state.uname},age:{this.state.age},   eyecolor:{this.state.eyecolor}</h1>
            <button onClick={()=>{this.changedata()}}>change data</button>
        </div>
    )
  }
}
ReactDOM.render(<Welcome/>,document.getElementById("sample"))
