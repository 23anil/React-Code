let lists = React.createElement(
  "ul",
  null,
  React.createElement("li", {className:"car"}, "car"),
  React.createElement("li",{className:"bike"},"Bike")
);

let mobiles=["MI","oppo","realme"]
let onemobiles=mobiles.map((val,idx)=>{
    return( React.createElement("li",{key:idx},val))
})
  
let all=React.createElement("div",null,lists,onemobiles)



ReactDOM.render(all, document.getElementById("root"))