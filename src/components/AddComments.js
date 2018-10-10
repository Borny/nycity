import React, { Component } from "react";
import firebase from "../firebase.js";

class AddComments extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: ""
    };
  }

  // handling the input changes
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // handling the form submit
  handleSubmit(e) {
    if (this.refs.comment.value === "") {
      alert("you cannot publish nothing");
    } else {
      const messagesRef = firebase.database().ref("messages");
      const message = {
        comment: this.state.comment,
        user: this.state.username
      };
      messagesRef.push(message);
      this.setState({
        comment: "",
        username: ""
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <footer className="footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="hidden"
            type="text"
            name="username"
            ref="username"
            onChange={this.handleChange.bind(this)}
            value={this.state.username}
          />
          <input
            type="text"
            name="comment"
            ref="comment"
            placeholder="Say something!"
            onChange={this.handleChange.bind(this)}
            value={this.state.comment}
          />
          <button>submit</button>
        </form>
      </footer>
    );
  }
}

export default AddComments;
