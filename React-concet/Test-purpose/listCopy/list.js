let lists=React.createElement(
  "ul",
  null,
  React.createElement("li", {className:"car"}, "car"),
  React.createElement("li", {className:"bike"}, "Bike")
);

let friutes=["apple","orange","banana"]
let allitems=friutes.map((val,idx)=>{
   return(React.createElement("li",{key:idx,className:"car"},val))

})

let allelements=React.createElement("div",null,lists,allitems)

ReactDOM.render(allelements,document.getElementById("root"));


