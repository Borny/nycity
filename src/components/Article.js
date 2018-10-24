import React, { Component } from "react";
import firebase from "../firebase";

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
          let article = "article-content"
          if(this.props.one && (index === 0)){
            article = "article-content block"
          } else{
            article = "article-content"
          }

          console.log(article)
          return (
            <div className={article} id={`article${index}`} key={index}>
              <header>
                <h2>{card.title}</h2>
                <button
                  className="btn btn-close"
                  onClick={this.props.hideClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="19.607"
                  >
                    <path
                      fill="#FFF"
                      d="M31.998 9.782L32 9.768l-.001-.007c0-.084-.017-.167-.025-.25-.008-.075-.008-.149-.022-.224l-.002-.018c-.017-.087-.05-.167-.076-.25-.022-.07-.037-.144-.065-.212-.034-.083-.082-.157-.125-.234-.035-.065-.064-.133-.104-.194l-.008-.01c-.009-.012-.02-.022-.027-.034-.03-.038-.062-.074-.091-.112-.06-.074-.114-.152-.183-.221l-.01-.008c-.025-.025-.057-.044-.083-.069-.008-.007-.017-.013-.024-.021l-.012-.009a2.603 2.603 0 0 0-.316-.24 2.414 2.414 0 0 0-.367-.197L12.9.191a2.5 2.5 0 0 0-3.267 1.354c-.528 1.275.078 2.987 1.355 3.516l5.937 2.707H2.5a2.5 2.5 0 1 0 0 5h14.421l-5.937 2.207c-1.274.528-1.881 1.866-1.353 3.142.527 1.275 1.99 1.818 3.265 1.291l17.557-7.298c.002-.001.003-.018.005-.018l.001-.009c.099-.041.189-.1.281-.153.049-.027.101-.05.146-.081l.005-.005c.041-.027.074-.063.112-.092l.093-.075c.055-.046.114-.086.166-.137l.009-.01c.043-.044.077-.095.117-.142.035-.044.073-.085.107-.131.024-.031.053-.058.075-.09.003-.005.005-.011.009-.016.049-.074.084-.154.124-.232.034-.065.075-.125.104-.193l.002-.003c.01-.023.013-.047.021-.07.025-.068.042-.14.063-.21.017-.062.042-.12.055-.183l.002-.008c.021-.108.026-.217.033-.327.004-.047.015-.094.015-.143z"
                    />
                  </svg>
                </button>
              </header>
              <main>
                <img src={this.state.cardsUrls[index]} alt="new york" />

                <p>{card.summary}</p>
                <p>{card.dayStory}</p>
              </main>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Article;
