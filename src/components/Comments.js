import React, { Component } from "react";
import AddComments from "./AddComments";
import firebase, { auth } from "../firebase";


class Comments extends Component {
  constructor() {

    super();
    this.state = {
      messagesList: [],
      user: null
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

      // Scrolls the messages list to the bottom of the container at loading time
      const block = document.querySelector(".message-list");
      const scrollToBottom = () => {
        block.scrollTop = block.scrollHeight;
      };
      scrollToBottom();
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

    let commentsClasses = 'comments';
    if(this.props.open){
      commentsClasses = 'comments open';
    }

    return (
      <div className={commentsClasses}>
        <header className="header">
          <h2>Express yourself !!</h2>

          <button className="btn btn-close" onClick={this.props.close}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="19.607"><path fill="#FFF" d="M31.998 9.782L32 9.768l-.001-.007c0-.084-.017-.167-.025-.25-.008-.075-.008-.149-.022-.224l-.002-.018c-.017-.087-.05-.167-.076-.25-.022-.07-.037-.144-.065-.212-.034-.083-.082-.157-.125-.234-.035-.065-.064-.133-.104-.194l-.008-.01c-.009-.012-.02-.022-.027-.034-.03-.038-.062-.074-.091-.112-.06-.074-.114-.152-.183-.221l-.01-.008c-.025-.025-.057-.044-.083-.069-.008-.007-.017-.013-.024-.021l-.012-.009a2.603 2.603 0 0 0-.316-.24 2.414 2.414 0 0 0-.367-.197L12.9.191a2.5 2.5 0 0 0-3.267 1.354c-.528 1.275.078 2.987 1.355 3.516l5.937 2.707H2.5a2.5 2.5 0 1 0 0 5h14.421l-5.937 2.207c-1.274.528-1.881 1.866-1.353 3.142.527 1.275 1.99 1.818 3.265 1.291l17.557-7.298c.002-.001.003-.018.005-.018l.001-.009c.099-.041.189-.1.281-.153.049-.027.101-.05.146-.081l.005-.005c.041-.027.074-.063.112-.092l.093-.075c.055-.046.114-.086.166-.137l.009-.01c.043-.044.077-.095.117-.142.035-.044.073-.085.107-.131.024-.031.053-.058.075-.09.003-.005.005-.011.009-.016.049-.074.084-.154.124-.232.034-.065.075-.125.104-.193l.002-.003c.01-.023.013-.047.021-.07.025-.068.042-.14.063-.21.017-.062.042-.12.055-.183l.002-.008c.021-.108.026-.217.033-.327.004-.047.015-.094.015-.143z"/></svg>
          </button>
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
        <AddComments />
      </div>
    );
  }
}

export default Comments;
