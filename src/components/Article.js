import React, { Component } from "react";
import firebase from "../firebase";

import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

import img1 from "./../img/dayOne/imgOne.jpg";
import img2 from "./../img/dayOne/imgTwo.jpg";
import img3 from "./../img/dayOne/imgThree.jpg";
import img4 from "./../img/dayOne/imgFour.jpg";
import img5 from "./../img/dayOne/imgFive.jpg";
import img6 from "./../img/dayOne/imgSix.jpg";
import img7 from "./../img/dayOne/imgSeven.jpg";
import img8 from "./../img/dayOne/imgEight.jpg";
import img9 from "./../img/dayOne/imgNine.jpg";

import img10 from "./../img/dayTwo/imgOne.jpg";
import img11 from "./../img/dayTwo/imgTwo.jpg";
import img12 from "./../img/dayTwo/imgThree.jpg";
import img13 from "./../img/dayTwo/imgFour.jpg";
import img14 from "./../img/dayTwo/imgFive.jpg";
// import img15 from "./../img/dayTwo/imgSix.jpg";
// import img16 from "./../img/dayTwo/imgSeven.jpg";
// import img17 from "./../img/dayTwo/imgEight.jpg";
// import img18 from "./../img/dayTwo/imgNine.jpg";

const imagesDayOne = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const imagesDayTwo = [img10, img11, img12, img13, img14];
const imagesDayThree = [img1, img2, img3, img4, img5, img6];
const imagesDayFour = [img1, img2, img3, img4, img5, img6];
const imagesDayFive = [img1, img2, img3, img4, img5, img6];
const imagesDaySix = [img1, img2, img3, img4, img5, img6];
const imagesDaySeven = [img1, img2, img3, img4, img5, img6];

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
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
    const titlePhotos = {
      cardOne: "dayOne",
      cardTwo: "dayTwo",
      cardThree: "dayThree",
      cardFour: "dayFour",
      cardFive: "dayFive",
      cardSix: "daySix",
      cardSeven: "daySeven"
    };

    const promises = [];
    for (let photo in titlePhotos) {
      const promise = firebase
        .storage()
        .ref()
        .child(`photos/${titlePhotos[photo]}/${photo}.jpg`)
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

    const { photoIndex, isOpen } = this.state;

    return (
      <div className={articleClasses}>
        {isOpen && (
          <Lightbox
            mainSrc={imagesDayTwo[photoIndex]}
            nextSrc={imagesDayTwo[(photoIndex + 1) % imagesDayTwo.length]}
            prevSrc={imagesDayTwo[(photoIndex + imagesDayTwo.length - 1) % imagesDayTwo.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + imagesDayTwo.length - 1) % imagesDayTwo.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imagesDayTwo.length
              })
            }
          />
        )}

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

          let dayToLoad = [];
          if(index === 0){
            dayToLoad = imagesDayOne
          } else if(index === 1){
            dayToLoad = imagesDayTwo
          }
          
          return (
            <div className={article} id={`article${index}`} key={index}>
              <header>
                <p>{card.title}</p>
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
                <img
                  className="article-img-title"
                  src={this.state.cardsUrls[index]}
                  alt="new york"
                />

                <p className="article-summary">{card.summary}</p>
                <p className="article-text">{card.dayStory}</p>
                <div className="img-container">
  
                  {dayToLoad.map((image, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={image}
                          alt={image}
                          onClick={() => this.setState({ isOpen: true })}
                        />
                      </div>
                    );
                  })}
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
