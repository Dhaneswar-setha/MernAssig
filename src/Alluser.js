import React, { Component } from "react";

export default class Alluser extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    fetch("https://localhost:27017/myLoginRegisterDB")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          user: result
        });
        console.log(result);
      });
  }
  render() {
    return (
      <div>
        <center>
          <h1> All User</h1>
        </center>
        {this.state.user.map((u, i) => {
          return <div>{u.name}</div>;
        })}
      </div>
    );
  }
}
