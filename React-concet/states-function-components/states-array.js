function Welcome() {
  useSta;
  let [bikes, setbikes] = React.useState([
    "R15",
    "RE",
    "activa",
    "pilsar",
    "KTM",
  ]);

  console.log("bikes", bikes);

  let remove = () => {
    let index = bikes.indexOf("RE");
    bikes.splice(index, 1);
    let bikecopy = [...bikes];
    setbikes(bikecopy);
  };
  return (
    <div>
      <button onClick={remove}>Remove Bike</button>
      <h1>bikes</h1>
      {bikes.map((val, inx) => {
        return <li key={inx}>{val}</li>;
      })}
    </div>
  );
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
