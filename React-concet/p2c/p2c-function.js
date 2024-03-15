function Father() {
  let bike = "splender";
  return (
    <div>
      <h1>Father is haveing a {bike} bike</h1>
      <Son bike={bike} />
    </div>
  );
}
function Son(props) {
  return (
    <div>
      <h1>Son use father bike -{props.bike}</h1>
    </div>
  );
}

ReactDOM.render(<Father />, document.getElementById("sample"));
