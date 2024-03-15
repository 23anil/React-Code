function Events(){
let print=()=>{
    console.log("Normal Print");
}
let upadteprint=(Name)=>{
    console.log("upadteprint Print");
    console.log("Name :",Name);
}
let fullupadteprint=(age,place)=>{
    console.log("fullupadteprint Print");
    console.log("age:",age,"place :",place);
}
    return(
        <div>
            <h1>Events</h1>
            <button onClick={print}>Normal print</button>
            <button onClick={()=>{upadteprint("Raju")}}>upadteprint print</button>
            <button onClick={()=>{fullupadteprint(23,"belagam")}}>fullupadteprint print</button>
        </div>
    )
}

ReactDOM.render(<Events/>,document.getElementById("root"))