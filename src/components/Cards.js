import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import timesquare from "../img/timesquare.jpg";
import statue from "../img/statue.jpeg";
import central from "../img/central.jpg";

class Cards extends Component {
  render() {
    const cards = [
      [timesquare, "day one", "the new world"],
      [statue, "day two", "blabla"],
      [central, "day 3", "baldksfj"]
    ];

    return (
      <div className="cards">
        <ul>
          {cards.map(card => {
            return (
              <li className="card" key="">
                <Link to='/dayOne'>
                  <img src={card[0]} alt="new york" />
                  <div className="card-text">
                    <p>{card[1]}</p>
                    <p>{card[2]}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cards;
