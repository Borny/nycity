import React, { Component } from "react";
import firebase, { auth, provider } from "../firebase.js";

class AddComments extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
      photo: "",
      user: null
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
        user: this.state.user.displayName,
        photo: this.state.user.photoURL,
        sentAt : Date.now()
      };
      messagesRef.push(message);
      this.setState({
        comment: "",
        username: ""
      });
    }
    e.preventDefault();

  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  componentDidMount() {

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <footer className="footer">
        {this.state.user ? (
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
        ) : (
          <button onClick={this.login.bind(this)}>Log In</button>
        )}
      </footer>
    );
  }
}

export default AddComments;
