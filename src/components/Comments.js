import React, { Component } from "react";
import AddComments from "./AddComments";
import firebase, { auth } from "../firebase";

class Comments extends Component {
  constructor() {

    super();
    this.state = {
      messagesList: []
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
          photo: messages[message].photo,
          sentAt: messages[message].sentAt,
          day: new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: 'short',day: '2-digit'}).format(messages[message].sentAt),
          time: new Intl.DateTimeFormat('fr-FR', {hour: '2-digit', minute: '2-digit'}).format(messages[message].sentAt)
        });
      }
      this.setState({
        messagesList: newState
      });

      // Scrolls the messages to the bottom at loading time
      const block = document.querySelector(".message-list");
      const scrollToBottom = () => {
        block.scrollTop = block.scrollHeight;
      };
      scrollToBottom();
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  render() {
    return (
      <div className="comments">
        <header className="header">
          <h2>Express yourself !!</h2>
          <button className="btn btn-comment" onClick={this.logout.bind(this)}>logout</button>
        </header>
        <div className="message-list">
          <ul>
            {this.state.messagesList.map(message => {
              return (
                <li className="message-block" key={message.id}>
                  <div className="message-photo">
                    <img src={message.photo} alt="" />
                  </div>
                  <div className="message-data">
                    <p className="message-username">{message.user} - {message.day}</p>
                    <p className="message-comment">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="25"><path fill="#FFF" d="M0 0h10v25S8.797.031 0 0z"/></svg>
                      {message.comment}
                      <span className="message-comment-time">{message.time}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <AddComments user={this.state.user}/>
      </div>
    );
  }
}

export default Comments;
