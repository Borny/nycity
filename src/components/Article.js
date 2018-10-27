import React, { Component } from "react";
import firebase from "../firebase";

import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

// // day one images
// import img1 from "./../img/dayOne/imgOne.jpg";
// import img2 from "./../img/dayOne/imgTwo.jpg";
// import img3 from "./../img/dayOne/imgThree.jpg";
// import img4 from "./../img/dayOne/imgFour.jpg";
// import img5 from "./../img/dayOne/imgFive.jpg";
// import img6 from "./../img/dayOne/imgSix.jpg";
// import img7 from "./../img/dayOne/imgSeven.jpg";
// import img8 from "./../img/dayOne/imgEight.jpg";
// import img9 from "./../img/dayOne/imgNine.jpg";

// // day two images
// import img10 from "./../img/dayTwo/imgOne.jpg";
// import img11 from "./../img/dayTwo/imgTwo.jpg";
// import img12 from "./../img/dayTwo/imgThree.jpg";
// import img13 from "./../img/dayTwo/imgFour.jpg";
// import img14 from "./../img/dayTwo/imgFive.jpg";

// const imagesDayOne = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
// const imagesDayTwo = [img10, img11, img12, img13, img14];
// const imagesDayThree = [img1, img2, img3, img4, img5, img6];
// const imagesDayFour = [img1, img2, img3, img4, img5, img6];
// const imagesDayFive = [img1, img2, img3, img4, img5, img6];
// const imagesDaySix = [img1, img2, img3, img4, img5, img6];
// const imagesDaySeven = [img1, img2, img3, img4, img5, img6];

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      articles: [],
      articlesUrls: ""
    };
  }

  componentDidMount() {
    // Fetching the datas
    const articlesRef = firebase.database().ref("article_content");

    articlesRef.on("value", snapshot => {
      let articles = snapshot.val();
      let newState = [];
      for (let card in articles) {
        newState.push({
          id: card,
          title: articles[card].title,
          dayNumberArticle: articles[card].dayNumberArticle,
          summary: articles[card].summary,
          dayStory: articles[card].dayStory
        });
      }
      this.setState({
        articles: newState
      });
    });

    // Fetching the pictures
    const titlePhotos = {
      cardOne: "dayOne",
      cardTwo: "dayTwo",
      cardThree: "dayThree",
      cardFour: "dayFour",
      cardFive: "dayFive",
      articlesix: "daySix",
      articleseven: "daySeven"
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
            articlesUrls: promisesUrls
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // sets a default class for the articles component
    let articleClasses = "article";
    if (this.props.show) {
      articleClasses = "article show";
    }

    // lightbox props
    const { photoIndex, isOpen } = this.state;

    // loading the proper array of images according to the day
    let imagesLightBoxToLoad = [];
    // if (this.props.articleOne) {
    //   imagesLightBoxToLoad = imagesDayOne;
    // } else if (this.props.articleTwo) {
    //   imagesLightBoxToLoad = imagesDayTwo;
    // } else if (this.props.articleThree) {
    //   imagesLightBoxToLoad = imagesDayThree;
    // } else if (this.props.articleFour) {
    //   imagesLightBoxToLoad = imagesDayFour;
    // } else if (this.props.articleFive) {
    //   imagesLightBoxToLoad = imagesDayFive;
    // } else if (this.props.articleSix) {
    //   imagesLightBoxToLoad = imagesDaySix;
    // } else if (this.props.articleSeven) {
    //   imagesLightBoxToLoad = imagesDaySeven;
    // }

    return (
      <div className={articleClasses}>
        {/* loading the lightbox component  */}
        {isOpen && (
          <Lightbox
            mainSrc={imagesLightBoxToLoad[photoIndex]}
            nextSrc={
              imagesLightBoxToLoad[
                (photoIndex + 1) % imagesLightBoxToLoad.length
              ]
            }
            prevSrc={
              imagesLightBoxToLoad[
                (photoIndex + imagesLightBoxToLoad.length - 1) %
                  imagesLightBoxToLoad.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + imagesLightBoxToLoad.length - 1) %
                  imagesLightBoxToLoad.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imagesLightBoxToLoad.length
              })
            }
          />
        )}

        {this.state.articles.map((card, index) => {
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

          // loading the proper array of images according to the day
          let imagesToLoad = [];
          // if (index === 0) {
          //   imagesToLoad = imagesDayOne;
          // } else if (index === 1) {
          //   imagesToLoad = imagesDayTwo;
          // } else if (index === 2) {
          //   imagesToLoad = imagesDayThree;
          // } else if (index === 3) {
          //   imagesToLoad = imagesDayFour;
          // } else if (index === 4) {
          //   imagesToLoad = imagesDayFive;
          // } else if (index === 5) {
          //   imagesToLoad = imagesDaySix;
          // } else if (index === 6) {
          //   imagesToLoad = imagesDaySeven;
          // }

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
                  src={this.state.articlesUrls[index]}
                  alt="new york"
                />

                <p className="article-summary">{card.summary}</p>
                <p className="article-text">{card.dayStory}</p>
                <div className="img-container">
                  {/* Going through an array of images according to the corresponding day */}
                  {imagesToLoad.map((image, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={image}
                          alt={image}
                          // opening the lightbox when an image is clicked
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
