import React, { Component } from "react";
import AddComments from "./AddComments";
import firebase from '../firebase';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
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
        comment: messages[message].comment
      });
    }
    this.setState({
      messagesList: newState
    });
  });
}

  render() {
    return (
      <div className="comments">
        <header>
          <h2>Comments</h2>
        </header>
        <div>
          <ul>
            {this.state.messagesList.map((message)=> {
              return (
                <li key={message.id}>
                  <p>{message.user}</p>
                  <p>{message.comment}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <AddComments />
      </div>
    );
  }
}

export default Comments;
