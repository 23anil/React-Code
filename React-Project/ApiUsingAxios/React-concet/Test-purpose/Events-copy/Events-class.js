class EventsClass extends React.Component {
    normal=()=>{
        console.log("Normal print");
    }
    update=(name)=>{
        console.log("update print");
        console.log("name:",name);
    }
    upload=(place,age)=>{
        console.log("upload print");
        console.log("place:",place);
        console.log("age:",age);
    }

  render() {
    return (
      <div>
        <h1>Events-class</h1>
        <button onClick={this.normal}>Normal</button>
        <button onClick={()=>{this.update("tom")}}>update</button>
        <button onClick={()=>{this.upload("cta",23)}}>upload</button>
      </div>
    );
  }
}

ReactDOM.render(<EventsClass />, document.getElementById("root"));
