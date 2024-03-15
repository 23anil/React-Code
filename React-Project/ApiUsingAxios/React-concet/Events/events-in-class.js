class Eventsclass extends React.Component {
  myfuc() {
    console.log("my function is excuted");
  }

  myage() {
    console.log("my age function is excuted");
  }

  mydata = (data) => {
    console.log(`my  data is:${data}`);
  };
  
  render() {
    return(
    <div>
      <h1>hello good morning</h1>
      <button onClick={this.myfuc}>click me</button>
      <button onClick={()=>{this.myage()}}>get age</button>
      <button onClick={()=>{this.mydata("chatgpt")}}>get data</button>
    </div>
    );
  }
}

ReactDOM.render(<Eventsclass/>,document.getElementById("sample"))
