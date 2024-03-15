// create ul and li lists
let element = React.createElement(
  "ul",
  null,
  React.createElement("li", { className: "car" }, "car"),
  React.createElement("li", { className: "bike" }, "bike")
);
// create array
let mobiles = ["mi", "apple", "vivo"];
let onemobiles = mobiles.map((val, inx) =>
  React.createElement("li", { key: inx }, val)
);

// add one element in lists and array
let allitems = React.createElement("div", null, element, onemobiles);

ReactDOM.render(allitems, document.getElementById("sample"));
