class Testpurpose extends React.Component{
    state={
        uname:"anil",
        age:"23",
        place:"bangalore"
    }
    update(){
        console.log( "Before",this.state.uname);
        this.state.uname="vijay"
        console.log( "After:",this.state.uname);
        // console.log( "Before",this.state.uname);
        // this.setState({
        //     uname:"Vijay",
        //     age:"23",
        //     place:"Mangalore"
        // })
       
        // console.log( "After:",this.state.uname);
    }

    render(){
        return(
            <div><h1>Testpurpose</h1>
            <h5>{this.state.uname}{this.state.age}{this.state.place}</h5>
            <button onClick={()=>{this.update()}}>Change state</button>
            </div>    
        )
    }
}

ReactDOM.render(<Testpurpose/>,document.getElementById("root"))