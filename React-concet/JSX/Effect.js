function Test() {
  React.useEffect(() => {
    console.log("Excuted useEffect");
  });
  return (
    <div>
      <h1>Anil</h1>
    </div>
  );
}
ReactDOM.render(<Test />, document.getElementById("sample"));
