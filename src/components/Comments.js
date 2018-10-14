import React, { Component } from "react";
import AddComments from "./AddComments";
import firebase, { auth, provider } from "../firebase";

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
                      {message.comment}
                      <span className="message-comment-time">{message.time}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <AddComments />
      </div>
    );
  }
}

export default Comments;
