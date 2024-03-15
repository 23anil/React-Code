function StateFunction() {
  // String
  const [Name, setName] = React.useState("Gupti");
  // integer
  const [age, setage] = React.useState(23);
  // Object
  const [person, setperson] = React.useState({
    name: "pop",
    age: 23,
    place: "mysore",
  });

  const [bikes, setbikes] = React.useState(["R15", "RE", "splender", "TVS-XL"]);

  let change = () => {
    setperson({
      ...person,
      name: "pinky",
      age: 32,
      place: "Davangere",
    });

    let index = bikes.indexOf("TVS-XL");
    bikes.splice(index, 1);
    let copyBike = [...bikes];
    setbikes(copyBike);
  };

  return (
    <div>
      <h1>state all types</h1>
      <h2>Name : {Name}</h2>
      <h3>age : {age}</h3>
      <h4>
        "{person.name}" "{person.age}" "{person.place}"
      </h4>
      {bikes.map((val, idx) => (
        <li key={idx}>{val}</li>
      ))}
      <br/>
      <button onClick={change}>change value</button>
    </div>
  );
}

ReactDOM.render(<StateFunction />, document.getElementById("root"));
