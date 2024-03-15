let uname = "raju";

let elem = <h1>Hello,{uname}</h1>;

let mobiles = ["mi", "apple", "vivo"];

let onemobiles = mobiles.map((val, inx) => {
  return <li key={inx}>onemobiles  "{val}"</li>;
});

let allitems = 
  <div>
    {elem}
    {onemobiles}
  </div>
;

ReactDOM.render(allitems,document.getElementById("sample"));

