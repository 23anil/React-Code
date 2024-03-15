class Header extends React.Component{
    render(){
        return (<div>
            <h1>Header Component</h1>
        </div>);
    }
}

class Content extends React.Component{
    render(){
        console.log("props in content",this.props);
        return (<div>
           <h2>I m Content {this.props.car}- {this.props.color}
           {this.props.chocolate}{this.props.fname} {this.props.age}
           {this.props.Mobile}  
           {this.props.mobilecolor}
           </h2>
        </div>);
    }
}

class Footer extends React.Component{
    render(){
        console.log("props in content",this.props);
        return (<div>  
         <h1>I m Footer</h1>
        </div>);
    }
}

ReactDOM.render(<div>
    <Header/>
    <Content car="Crysta" color="brown"/>
    <Content chocolate="polo" />
    <Content fname="raju" age={28}/>
    <Content  Mobile="apple"  mobilecolor="gold" />
    <Footer/>
</div>,document.getElementById("sample"))