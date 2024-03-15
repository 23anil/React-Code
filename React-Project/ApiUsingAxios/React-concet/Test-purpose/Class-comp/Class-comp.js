class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content :-{this.props.Name} {this.props.age}{this.props.place} {this.props.nikename}</h2>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Header />
    <Content Name={"topo"} age={23}/>
    <Content place={"kayco"}/>
    <Content nikename={"basho"}/>
    <Footer />
  </div>,
  document.getElementById("root")
);
