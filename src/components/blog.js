import React, { Component } from "react";
import axios from "axios";

class Blog extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.path);
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      this.setState({
        users: res.data,
      });
    });
  }

  render() {
    const { users } = this.state;
    const userList = users.map((user) => {
      return (
        <div key={user.id}>
          <div className="content">
            <div>Name : {user.name}</div>
            <div>userName : {user.username}</div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Blog</h1>
        <p>This is Blog Page</p>
        <div>
          {/* {this.state.users.map((user) => (
            <div>
              {user.name} and username is {user.username}
              <div>{user.email}</div>
            </div>
          ))} */}
          {userList}
        </div>
      </div>
    );
  }
}

export default Blog;
