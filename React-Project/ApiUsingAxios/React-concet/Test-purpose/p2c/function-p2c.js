function Parent() {
  let name = "tiffen";
  let bikes=["KTM","RE","Yulo"]
  return (
    <div>
      <h1>Parent</h1>
      <Child name={name} bikes={bikes}/>
    </div>
  );
}

function Child({name,bikes}) {
  return (
    <div>
      <h1>Child</h1>
      <h2>gift for my parent :{name}</h2>
      <h4>bikes :-</h4>
      {
        bikes.map((val,idx)=>(<p key={idx}>{val}</p>))
      }
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
