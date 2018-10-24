import React, { Component } from "react";
import firebase from "../firebase";

import img1 from "./../img/dayOne/imgOne.jpg";
import img2 from "./../img/dayOne/imgTwo.jpg";
import img3 from "./../img/dayOne/imgThree.jpg";
import img4 from "./../img/dayOne/imgFour.jpg";
import img5 from "./../img/dayOne/imgFive.jpg";
import img6 from "./../img/dayOne/imgSix.jpg";

class Article extends Component {
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
    let articleClasses = "article";
    if (this.props.show) {
      articleClasses = "article show";
    }

    return (
      <div className={articleClasses}>
        {this.state.cards.map((card, index) => {
          let article = "article-content";
          if (
            (this.props.articleOne && index === 0) ||
            (this.props.articleTwo && index === 1) ||
            (this.props.articleThree && index === 2) ||
            (this.props.articleFour && index === 3) ||
            (this.props.articleFive && index === 4) ||
            (this.props.articleSix && index === 5) ||
            (this.props.articleSeven && index === 6)
          ) {
            article = "article-content block";
          } else {
            article = "article-content";
          }

          return (
            <div className={article} id={`article${index}`} key={index}>
              <header>
                <h2>{card.title}</h2>
                <button
                  className="btn btn-tertiary btn-close"
                  onClick={this.props.hideClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.107"
                    height="22.589"
                  >
                    <path d="M16.254 9.539L3.147.362A2 2 0 1 0 .853 3.639l10.934 7.656L.854 18.95a2.001 2.001 0 0 0 2.295 3.276l13.105-9.177a1.99 1.99 0 0 0 .844-1.755 1.992 1.992 0 0 0-.844-1.755z" />
                  </svg>
                </button>
              </header>
              <main>
                <img src={this.state.cardsUrls[index]} alt="new york" />

                <p>{card.summary}</p>
                <p>{card.dayStory}</p>
                <div className="img-container">
                  <div>
                    <img src={img1} alt={img1} />
                  </div>
                  <div>
                    <img src={img2} alt={img2} />
                  </div>
                  <div>
                    <img src={img3} alt={img3} />
                  </div>
                  <div>
                    <img src={img4} alt={img4} />
                  </div>
                  <div>
                    <img src={img5} alt={img5} />
                  </div>
                  <div>
                    <img src={img6} alt={img6} />
                  </div>
                </div>
              </main>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Article;
