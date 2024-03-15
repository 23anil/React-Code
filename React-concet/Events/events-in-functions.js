function EventsFunctions(){
    let myfuc=()=>{
        console.log("myfuc is excuted");
    }

    let mydata=(event,data)=>{
        console.log("mydata is",data);
        console.log("mydata is",event);
    }

    let myage=(value)=>{
        console.log("myage is :",value);
    }
    return(
        <div>

            <h1>hello good afternoon</h1>
            <button onClick={myfuc}>click me</button>
            <button onClick={(event)=>{mydata(event,"google")}}>get data</button>
            <button onClick={()=>{myage(23)}}>get age</button>
        </div>
    )
}

ReactDOM.render(<EventsFunctions/>,document.getElementById("sample"))
