import React, { Component } from "react";
import firebase, { auth, provider } from "../firebase.js";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      dayNumber: "",
      user: null
    };
  }

  handleSubmit(e) {
    const articleRef = firebase.database().ref("article_content");
    const article = {
      title: this.state.title,
      dayNumber: this.state.dayNumber
    };
    articleRef.push(article);
    this.setState({
      title: "",
      dayNumber: ""
    });
    e.preventDefault();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  login() {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({
          user
        });
        console.log(this.state.user.email);
      })
      .catch(console.log("Could not connect to Google"));
  }

  render() {
    return (
      <div className="admin_page">
        {this.state.user && (this.state.user.email === "tristan.deloris@gmail.com" || this.state.user.email === "jon.naeck@gmail.com") ? (
          <form className="form-admin" onSubmit={this.handleSubmit.bind(this)}>
            {/* <input
              className="upload-admin"
              type="text"
              name="day-photo"
              ref="day-photo"
              value=""
              placeholder="Enter a photo"
            /> */}
            <button>Upload</button>

            <select className="" id="day_select">
              <option value="">Select a day</option>
              <option value="dayOne">Day one</option>
              <option value="dayTwo">Day two</option>
              <option value="dayThree">Day three</option>
              <option value="dayFour">Day four</option>
              <option value="dayFive">Day five</option>
              <option value="daySix">Day six</option>
            </select>

            <input
              className="input-admin"
              type="text"
              name="title"
              ref="title"
              placeholder="Enter a title"
              onChange={this.handleChange.bind(this)}
              value={this.state.title}
            />

            <input
              className="select-admin"
              type="text"
              name="dayNumber"
              ref="dayNumber"
              placeholder="Enter a day number"
              onChange={this.handleChange.bind(this)}
              value={this.state.dayNumber}
            />

            <textarea >

            </textarea>

            <button className="btn btn-upload">Upload article</button>
          </form>
        ) : (
          <button className="btn btn-primary" onClick={this.login.bind(this)}>
            Login
          </button>
        )}
      </div>
    );
  }
}

export default Admin;
