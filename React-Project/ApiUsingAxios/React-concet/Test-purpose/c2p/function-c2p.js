function Parent() {
    const [sms, setsms] = React.useState("")
  let data = (data) => {
    console.log(data);
    setsms(data)
  };
  return (
    <div>
      <h1>I'M Parent</h1>
      <h4>{sms}</h4>
      <Child data={data} />
  
    </div>
  );
}

function Child({ data }) {
  let message = "Hii Parent";
  return (
    <div>
      <h1>I'M Child</h1>
      <button onClick={() => {data(message)}}>call</button>
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
