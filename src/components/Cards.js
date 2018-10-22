import React, { Component } from "react";
import firebase from '../firebase';

class Cards extends Component {
  constructor(){
    super();
    this.state = {
      cards : []
    }
  }

componentDidMount(){
  const cardsRef = firebase.database().ref("article_content");

  cardsRef.on("value", snapshot => {
    let cards = snapshot.val();
    let newState = [];
    for(let card in cards){
      newState.push({
        id: card,
        title: cards[card].title,
        dayNumber: cards[card].dayNumber
      })
    }
    this.setState({
      cards: newState
    })
    console.log(cards)
  })

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
                  <img src={card[0]} alt="new york" />
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
