let uname="raju";

let ele=<h1>{uname}</h1>

let bikes=["R15","Splender","Ktm","RE"]
let allbikes=bikes.map((val,idx)=><li key={idx}>{val}</li>)

let allitems=<div>
    {ele}
    {allbikes}
</div>

ReactDOM.render(allitems, document.getElementById("sample"))