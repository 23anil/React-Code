class Parent extends React.Component
{
    state={
        childdata:""
    }

    revuve=(data)=>{
        console.log(data);
        this.setState({
            childdata:data,
        });
    }

    render(){
        return(<div>
            <h1>I'M Parent</h1>
            <h4>{this.state.childdata}</h4>
            <Child revuve={this.revuve}/>
        </div>)
    }
}

class Child extends React.Component
{
     sms="Hello Parent"
    render(){
        return(<div>
            <h1>I'M Child</h1>
            <button onClick={()=>{this.props.revuve(this.sms)}}>click me</button>
        </div>)
    }
}

ReactDOM.render(<Parent/>,document.getElementById("root"))