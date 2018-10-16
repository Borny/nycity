import React, { Component } from "react";

class Cards extends Component {
  render() {

    // sets a default class for the cards component
    let cardsClasses = "cards";
    if (this.props.hide) {
      cardsClasses = "cards hide";
    }

    return (
      <div className={cardsClasses}>
        <ul>
          {this.props.cards.map((card, index) => {
            return (
              <li className="card" key={index} onClick={this.props.hideClick}>
                <img src={card[0]} alt="new york" />
                <div className="card-text">
                  <p>{card[1]}</p>
                  <p>{card[2]}</p>
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
