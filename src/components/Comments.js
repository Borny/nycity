import React, { Component } from "react";
import AddComments from "./AddComments";
import firebase, { auth } from "../firebase";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      messagesList: [],
      user: null,
      userType: null
    };
  }

  // getting the messages from firebase
  componentDidMount() {
    const messagesRef = firebase.database().ref("messages");

    messagesRef.on("value", snapshot => {
      let messages = snapshot.val();
      let newState = [];
      for (let message in messages) {
        newState.push({
          id: message,
          comment: messages[message].comment,
          user: messages[message].user,
          firstName: messages[message].user.split(" ")[0],
          firstLetter: messages[message].user.split(" ")[0].charAt(0),
          photo: messages[message].photo,
          sentAt: messages[message].sentAt,
          day: new Intl.DateTimeFormat("fr-FR", {
            year: "numeric",
            month: "short",
            day: "2-digit"
          }).format(messages[message].sentAt),
          time: new Intl.DateTimeFormat("fr-FR", {
            hour: "2-digit",
            minute: "2-digit"
          }).format(messages[message].sentAt)
        });


      }
      this.setState({
        messagesList: newState
      });

      // Scrolls the messages list to the bottom of the container at loading time
      const block = document.querySelector(".message-list");
      const scrollToBottom = () => {
        block.scrollTop = block.scrollHeight;
      };
      scrollToBottom();
    });

    // checking if the user is already logged in on page load
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  // logout
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  render() {
    // defining classes for the comments block
    let commentsClasses = "comments";
    if (this.props.open) {
      commentsClasses = "comments open";
    }

    // defining classes for the message block
    let messageClasses = "message-block";

    return (
      <div className={commentsClasses}>
        <header className="header">
          <button className="btn btn-tertiary btn-close" onClick={this.props.close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.107"
              height="22.589"
            >
              <path
                d="M16.254 9.539L3.147.362A2 2 0 1 0 .853 3.639l10.934 7.656L.854 18.95a2.001 2.001 0 0 0 2.295 3.276l13.105-9.177a1.99 1.99 0 0 0 .844-1.755 1.992 1.992 0 0 0-.844-1.755z"
              />
            </svg>
          </button>
          <h2>Express yourself !</h2>
          <button className="btn btn-tertiary btn-logout" onClick={this.logout.bind(this)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 26.85">
              <defs />
              <g id="logout" transform="translate(-305 -95)">
                <path
                  id="Soustraction_2"
                  data-name="Soustraction 2"
                  d="M-743-15.15a11.753 11.753 0 0 1-8.485-3.617A12.452 12.452 0 0 1-755-27.5a12.454 12.454 0 0 1 3.515-8.733A11.85 11.85 0 0 1-747-39.15v2.669a9.94 9.94 0 0 0-5.6 8.981 9.754 9.754 0 0 0 9.6 9.88 9.754 9.754 0 0 0 9.6-9.88 9.94 9.94 0 0 0-5.6-8.981v-2.669a11.85 11.85 0 0 1 4.486 2.918A12.453 12.453 0 0 1-731-27.5a12.451 12.451 0 0 1-3.514 8.732A11.753 11.753 0 0 1-743-15.15z"
                  transform="translate(1060 137)"
                />
                <rect
                  id="Rectangle_26"
                  data-name="Rectangle 26"
                  width="2"
                  height="10"
                  rx="1"
                  transform="translate(316 95)"
                />
              </g>
            </svg>
          </button>
        </header>
        <div className="message-list">
          <ul>
            {this.state.messagesList.map(message => {
              if (
                message.user === "Tristan Deloris"
              ) {
                messageClasses = "message-block admin admin-t";
              } else if(message.user === "Jonathan Naeck"){
                messageClasses = "message-block admin admin-j";
              } else {
                messageClasses = "message-block";
              }
              return (
                <li className={messageClasses} key={message.id}>
                  <div className="message-photo">
                    <img src={message.photo} alt={message.firstLetter} />
                  </div>
                  <div className="message-data">
                    <p className="message-username">
                      {message.firstName} - {message.day}
                    </p>
                    <p className="message-comment">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="25"
                      >
                        <path d="M0 0h10v25S8.797.031 0 0z" />
                      </svg>
                      {message.comment}
                      <span className="message-comment-time">
                        {message.time}
                      </span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <AddComments userState={this.state.user} />
      </div>
    );
  }
}

export default Comments;
