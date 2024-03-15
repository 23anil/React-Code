function Father() {
  const [retrivedata, setretrivedata] = React.useState("");
  function pen(data) {
    setretrivedata(data);
  }
  return (
    <div>
      <h1>I'M Parent</h1>
      <h1>I'm use son pen -{retrivedata}</h1>
      <Son pen={pen} />
    </div>
  );
}
function Son(props) {
  let sonpen = "betterflow";
 
  return (
    <div>
      <h1>I'M Child</h1>
      <button onClick={()=>{props.pen(sonpen)}}>send</button>
    </div>
  );
}

ReactDOM.render(<Father />, document.getElementById("root"));
