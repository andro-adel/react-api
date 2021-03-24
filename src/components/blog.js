import React, { Component } from "react";
import axios from "axios";

class Blog extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      this.setState({
        users: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <p>This is Blog Page</p>
        <div>
          {this.state.users.map((user) => (
            <div>
              {user.name} and username is {user.username}
              <div>{user.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
