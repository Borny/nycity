import React, { Component } from "react";
import firebase from "../firebase";
import { storage } from "firebase";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      image: ''
    };
  }

  componentDidMount() {
    // Fetching the datas
    const cardsRef = firebase.database().ref("article_content");

    cardsRef.on("value", snapshot => {
      let cards = snapshot.val();
      let newState = [];
      for (let card in cards) {
        newState.push({
          id: card,
          title: cards[card].title,
          dayNumber: cards[card].dayNumber,
          summary: cards[card].summary,
          dayStory: cards[card].dayStory
        });
      }
      this.setState({
        cards: newState
      });
    });

    // Fetching the photos
      const photoRef = firebase.storage().ref();
      console.log(photoRef.child())

  }

  render() {
    // sets a default class for the cards component
    let cardsClasses = "cards";
    if (this.props.hide) {
      cardsClasses = "cards hide";
    }
    return (
      <div className={cardsClasses}>
        <ul>
          {this.state.cards.map((card, index) => {
            return (
              <li className="card" key={index} onClick={this.props.hideClick}>
                <div className="card-content">
                  <img src={this.state.pink} alt="new york" />
                  <div className="card-text">
                    <p>{card.dayNumber}</p>
                    <p>{card.title}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cards;
