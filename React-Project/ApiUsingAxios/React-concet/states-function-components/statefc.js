function Welcome(){
    let [uname,setuname]=React.useState("Raju")
    const [age,setage]=React.useState(18)
    function changedata(){
        setuname("naveen")
        setage(28);
    }

    return(
        <div>
            <h1>hello,{uname},{age}</h1>
            <button onClick={changedata}>changedata</button>
        </div>
    )
}

ReactDOM.render(<Welcome/>,document.getElementById("root"));