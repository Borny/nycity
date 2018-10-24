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
        sentAt: firebase.database.ServerValue.TIMESTAMP
      };
      messagesRef.push(message);
      this.setState({
        comment: "",
        username: ""
      });
    }
    e.preventDefault();
  }

  // checking if the user is already logged in on page load
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  // login duh!!!
  login() {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({
          user
        });
      })
      .catch(console.log("Could not connect to Google"));
  }

  render() {
    return (
      <footer className="footer">
        {this.state.user && this.props.userState ? ( // <= if user logged in display add comment
          <form className="form-add" onSubmit={this.handleSubmit.bind(this)}>
            <input
              className="hidden"
              type="text"
              name="username"
              ref="username"
              onChange={this.handleChange.bind(this)}
              value={this.state.username}
            />
            <input
              className="input-send"
              type="text"
              name="comment"
              ref="comment"
              placeholder="Say something!"
              onChange={this.handleChange.bind(this)}
              value={this.state.comment}
            />
            <button className="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M0 0v7.014L10 10 0 12.986V20l20-10z" />
              </svg>
            </button>
          </form>
        ) : (
          // <= else display login button
          <button className="btn btn-primary" onClick={this.login.bind(this)}>
            Login with Google
          </button>
        )}
      </footer>
    );
  }
}

export default AddComments;
