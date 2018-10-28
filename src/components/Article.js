import React, { Component } from "react";
import firebase from "../firebase";

import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

// // day one images
import img1 from "./../img/dayOne/img1.jpg";
import img2 from "./../img/dayOne/img2.jpg";
import img3 from "./../img/dayOne/img3.jpg";
import img4 from "./../img/dayOne/img4.jpg";
import img5 from "./../img/dayOne/img5.jpg";
import img6 from "./../img/dayOne/img6.jpg";
import img7 from "./../img/dayOne/img7.jpg";
import img8 from "./../img/dayOne/img8.jpg";
import img9 from "./../img/dayOne/img9.jpg";
import img10 from "./../img/dayOne/img10.jpg";
import img11 from "./../img/dayOne/img11.jpg";
import img12 from "./../img/dayOne/img12.jpg";
import img13 from "./../img/dayOne/img13.jpg";
import img14 from "./../img/dayOne/img14.jpg";
import img15 from "./../img/dayOne/img15.jpg";
import img16 from "./../img/dayOne/img16.jpg";
// import img17 from "./../img/dayOne/img17.jpg";
// import img18 from "./../img/dayOne/img18.jpg";
// import img19 from "./../img/dayOne/img19.jpg";
import img20 from "./../img/dayOne/img20.jpg";
import img21 from "./../img/dayOne/img21.jpg";
import img22 from "./../img/dayOne/img22.jpg";
import img23 from "./../img/dayOne/img23.jpg";
import img24 from "./../img/dayOne/img24.jpg";
import img25 from "./../img/dayOne/img25.jpg";
// import img26 from "./../img/dayOne/img26_bis.jpg";
import img27 from "./../img/dayOne/img27.jpg";
import img28 from "./../img/dayOne/img28.jpg";
import img29 from "./../img/dayOne/img29.jpg";
import img30 from "./../img/dayOne/img30.jpg";
import img31 from "./../img/dayOne/img31.jpg";
import img32 from "./../img/dayOne/img32.jpg";
import img33 from "./../img/dayOne/img33.jpg";
import img34 from "./../img/dayOne/img34.jpg";
import img35 from "./../img/dayOne/img35.jpg";
import img36 from "./../img/dayOne/img36.jpg";


const imagesDayOne = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,img11,img12,img13,img14,img15,img16,img20,img21,img22,img23,img24,img25,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36
];
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
    if (this.props.articleOne) {
      imagesLightBoxToLoad = imagesDayOne;
    } 
    // else if (this.props.articleTwo) {
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
          if (index === 0) {
            imagesToLoad = imagesDayOne;
          }
          //  else if (index === 1) {
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
