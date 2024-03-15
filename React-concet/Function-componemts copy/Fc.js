function Header(){
    return(
        <div>
            <h1>I m Header</h1>
        </div>
    )
}

function Content(props){
    return(
        <div>
            <h2>I m Content  :-{props.chocolate}                                 {props.car} {props.color} {props.fname} {props.age} {props.Mobile}
            {props.mobilecolor} </h2>
        </div>
    )
}

function Footer(){
    return(
        <div>
            <h1>I m Footer</h1>
        </div>
    )
}

ReactDOM.render(<div>
    <Header/>
    <Content car="Crysta" color="brown"/>
    <Content chocolate="polo" />
    <Content fname="raju" age={28}/>
    <Content  Mobile="apple"  mobilecolor="gold" />
    <Footer/>
</div>,document.getElementById("sample"))