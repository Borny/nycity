import React, { Component } from "react";
import firebase from "../firebase";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardsUrls: ""
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
          dayNumberArticle: cards[card].dayNumberArticle,
          summary: cards[card].summary,
          dayStory: cards[card].dayStory
        });
      }
      this.setState({
        cards: newState
      });
    });

    // Fetching the pictures
    const photos = {
      cardOne: "dayOne",
      cardTwo: "dayTwo",
      cardThree: "dayThree",
      cardFour: "dayFour",
      cardFive: "dayFive",
      cardSix: "daySix"
    };

    const promises = [];
    for (let photo in photos) {
      const promise = firebase
        .storage()
        .ref()
        .child(`photos/${photos[photo]}/${photo}.jpg`)
        .getDownloadURL()
        .then(url => {
          return url;
        })
        .catch(err => {});
      promises.push(promise);
    }

    const promisesUrls = [];
    Promise.all(promises)
      .then(urls => {
        urls.map(url => {
          promisesUrls.push(url);
          // updating
          this.setState({
            cardsUrls: promisesUrls
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
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
              <li className="card" key={index} id={index}>
                <div className="card-content">
                  <span className="post-it">{card.dayNumberArticle}</span>

                  <img src={this.state.cardsUrls[index]} id={`img${index}`} alt="new york" onClick={this.props.hideClick}/>

                  <div className="card-text">
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
