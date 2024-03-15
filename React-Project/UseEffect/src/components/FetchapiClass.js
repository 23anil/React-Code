import React, { Component } from "react";

 class FetchapiClass extends Component {
  state = {
    user: [],
  };
  fetchuser = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log("data", data);
    this.setState({ user: data });
  };
  componentDidMount() {
    this.fetchuser();
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>User List</h1>
        {this.state.user.map((val) => (
          <li key={val.id}>{val.name}</li>
        ))}
      </div>
    );
  }
}

export default FetchapiClass;
