function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}
function Content({name,age,car,designation}) {
  return (
    <div>
      Content {name}
      {age}
      {car}
      {designation}
    </div>
  );
}
function Footer() {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Header />
    <Content name={"anil"} age={18} />
    <Content car={"tayota"} />
    <Content designation={"farmer"} />
    <Footer />
  </div>,

  document.getElementById("root")
);
