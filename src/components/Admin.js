import React, { Component } from "react";
import firebase, { auth, provider } from "../firebase.js";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      dayNumber: "",
      summary: "",
      dayStory: "",
      user: null
    };
  }

  // checking if the user is already logged in on page load
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  handleSubmit(e) {
    const articleRef = firebase.database().ref("article_content");
    const article = {
      title: this.state.title,
      dayNumber: this.state.dayNumber,
      summary: this.state.summary,
      dayStory: this.state.dayStory
    };
    articleRef.push(article);
    this.setState({
      title: "",
      dayNumber: "",
      summary: "",
      dayStory: ""
    });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  }

  handleSelectChange(e) {
    this.setState({
      dayNumber: [e.target.value]
    });
  }

  handleTextareaChange(e) {
    this.setState({
      summary: [e.target.value]
    });
  }

  handleTextareaDayStoryChange(e) {
    this.setState({
      dayStory: [e.target.value]
    });
  }

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
      <div className="admin_page">
        {this.state.user &&
        (this.state.user.email === "tristan.deloris@gmail.com" ||
          this.state.user.email === "jon.naeck@gmail.com") ? (
          <form className="form-admin" onSubmit={this.handleSubmit.bind(this)}>
            <label className="label-admin">
              Day number
              <select
                className="select-admin"
                value={this.state.value}
                onChange={this.handleSelectChange.bind(this)}
              >
                <option value="day one">Day one</option>
                <option value="day two">Day two</option>
                <option value="day three">Day three</option>
                <option value="day four">Day four</option>
                <option value="day five">Day five</option>
                <option value="day six">Day six</option>
              </select>
            </label>

            <label className="label-admin">
              Article title
              <input
                className="input-admin"
                type="text"
                name="title"
                ref="title"
                placeholder="Enter a title"
                onChange={this.handleChange.bind(this)}
                value={this.state.title}
              />
            </label>
            <label className="label-admin">
              Enter a summary
              <textarea
                className="textarea-admin"
                name="summary"
                ref="summary"
                placeholder="Enter a summary"
                onChange={this.handleTextareaChange.bind(this)}
                value={this.state.summary}
              />
            </label>

            <label className="label-admin">
              Write what happened today
              <textarea
                className="textarea-admin"
                name="dayStory"
                ref="dayStory"
                placeholder="What happened today?"
                onChange={this.handleTextareaDayStoryChange.bind(this)}
                value={this.state.dayStory}
              />
            </label>

            <button className="btn btn-warning">Upload article</button>
          </form>
        ) : (
          <button className="btn btn-tertiary" onClick={this.login.bind(this)}>
            Login
          </button>
        )}
      </div>
    );
  }
}

export default Admin;
