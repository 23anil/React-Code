function Hotel(){
    const [data, setdata] = React.useState({
        Admin:"tayko",
        user:"Hacker",
        isTag:true
    })

    let store;

    if(data.isTag)
    {
        store=<div>
            <h1>Admin : {data.Admin}</h1>
            <h2>Menu</h2>
            <h3>Add Products</h3>
        </div>
    }else{
        store=<div>
            <h1>User : {data.user}</h1>
            <h2>Menu</h2>
            <h3>Buy Products</h3>
        </div>
    }
    let update=()=>{
        setdata({
            ...data,
            isTag: !data.isTag 
        })
    }

return(<div>
    <h1>WelCome To Hotel</h1>
    {store}
    <button onClick={update}>{data.isTag ? "change user":"change admin"}</button>

</div>)
}

ReactDOM.render(<Hotel/>,document.getElementById("root"))