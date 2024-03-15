let uname = "anil";

let Name = <h1>Name:{uname}</h1>;

let mobiles = ["mi", "Realme", "Apple", "oppo"];

let allitems = mobiles.map((val, inx) => {
  return <li key={inx}>{val}</li>;
});

let allelements = (
  <div>
    {Name}
    <h2>Mobiles :-</h2>
    {allitems}
  </div>
);

ReactDOM.render(allelements, document.getElementById("root"));
