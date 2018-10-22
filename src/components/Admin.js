import React, { Component } from "react";
import firebase, { auth, provider } from "../firebase.js";
import { storage } from "firebase";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      dayNumberPhoto: "",
      dayNumberArticle: "",
      summary: "",
      dayStory: "",
      user: null,
      selectedFile: ""
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
    if ((this.refs.title.value === "") || (this.refs.summary.value === "") || (this.refs.dayStory.value === "")){
      alert("you cannot publish nothing");
    } else {
      const articleRef = firebase.database().ref("article_content");
      const article = {
        title: this.state.title,
        dayNumberPhoto: this.state.dayNumberPhoto,
        summary: this.state.summary,
        dayStory: this.state.dayStory
      };
      articleRef.push(article);
      this.setState({
        title: "",
        dayNumberPhoto: "",
        summary: "",
        dayStory: ""
      });
    }
    e.preventDefault();
  }

  fileSelectedHandler(e) {
    this.setState({
      selectedFile: e.target.files,
      dayNumberArticle: this.state.dayNumberArticle
    });
  }

  handleUpload(e) {

    if(this.refs.selectDay.value === ""){
      alert('choose a fucking day you dumbass!!!!')
    } else {

      const selected = this.state.selectedFile;
      for(let i = 0; i < selected.length; i++){
        const storageRef = storage().ref(
          `photos/${this.state.dayNumber}/${selected[i].name}`
        );
        storageRef.put(selected[i]);
      }
            
    }

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
          <div>

            {/* uploading the pictures */}
            <div className="upload-form">
              <label className="label-admin">
                Day number
                <select
                  className="select-admin"
                  value={this.state.value}
                  onChange={this.handleSelectChange.bind(this)}
                  ref="selectDay"
                >
                  <option value="">Select a day</option>
                  <option value="day one">Day one</option>
                  <option value="day two">Day two</option>
                  <option value="day three">Day three</option>
                  <option value="day four">Day four</option>
                  <option value="day five">Day five</option>
                  <option value="day six">Day six</option>
                </select>
              </label>

              <label className="admin-upload-picture">
                <input
                  className="hidden"
                  type="file"
                  onChange={this.fileSelectedHandler.bind(this)}
                  ref={fileInput => (this.fileInput = fileInput)}
                  multiple
                />
                <button
                  onClick={() => this.fileInput.click()}
                  className="btn btn-tertiary"
                  ref='pickfile'
                >
                  Pick file
                </button>
                <button
                  onClick={this.handleUpload.bind(this)}
                  className="btn btn-warning"
                >
                  Upload
                </button>
              </label>
            </div>

            {/* Defining the articles text */}
            <form
              className="form-admin"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <label className="label-admin">
                Day number
                <select
                  className="select-admin"
                  value={this.state.value}
                  onChange={this.handleSelectChange.bind(this)}
                >
                  <option value="">Select a day</option>
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
          </div>
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
