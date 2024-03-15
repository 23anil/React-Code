class Parent extends React.Component{
    uname="gopi";
    frutis=["apple","orange","kiwi"];
    render(){
       
        return(<div>
            <h2>I AM Parent</h2>
            <Child name={this.uname} frutes={this.frutis} />
        </div>)
    }
}

class Child extends React.Component{
    render(){
        return(<div>
            <h2>I AM Child</h2>
            <h3>{this.props.name}</h3>
            {
                // console.log(this.props.frutes)
              this.props.frutes.map((val,idx)=>{
                return(  <li key={idx}>{val}</li>)
              
              })
            }
        </div>)
    }
}

ReactDOM.render(<Parent/>,document.getElementById("root"))

