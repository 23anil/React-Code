function Welcome() {
  let [person, setperson] = React.useState({
    fname: "Manju",
    lname: "K M",
    age: 29,
  });

  let changedata = () => {
    setperson({
      ...person,
      fname: "Anil",
      lname: "K R",
      age: 18,
    });
  };
  return (
    <div>
      <h1>
        hello,{person.fname} {person.lname} {person.age}
      </h1>
      <button onClick={changedata}>changeperson</button>
    </div>
  );
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
