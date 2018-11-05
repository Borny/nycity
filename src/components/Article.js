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

// day two images
import imga1 from "./../img/dayTwo/img1.jpg";
import imga2 from "./../img/dayTwo/img2.jpg";
import imga3 from "./../img/dayTwo/img3.jpg";
import imga4 from "./../img/dayTwo/img4.jpg";
import imga5 from "./../img/dayTwo/img5.jpg";
import imga6 from "./../img/dayTwo/img6.jpg";
import imga7 from "./../img/dayTwo/img7.jpg";
import imga8 from "./../img/dayTwo/img8.jpg";
import imga9 from "./../img/dayTwo/img9.jpg";
import imga10 from "./../img/dayTwo/img10.jpg";
import imga11 from "./../img/dayTwo/img11.jpg";
import imga12 from "./../img/dayTwo/img12.jpg";
import imga13 from "./../img/dayTwo/img13.jpg";
import imga14 from "./../img/dayTwo/img14.jpg";
import imga15 from "./../img/dayTwo/img15.jpg";
import imga16 from "./../img/dayTwo/img16.jpg";
import imga17 from "./../img/dayTwo/img17.jpg";
import imga18 from "./../img/dayTwo/img18.jpg";
import imga19 from "./../img/dayTwo/img19.jpg";
import imga20 from "./../img/dayTwo/img20.jpg";
import imga21 from "./../img/dayTwo/img21.jpg";
import imga22 from "./../img/dayTwo/img22.jpg";
import imga23 from "./../img/dayTwo/img23.jpg";
import imga24 from "./../img/dayTwo/img24.jpg";
import imga25 from "./../img/dayTwo/img25.jpg";
import imga26 from "./../img/dayTwo/img26.jpg";
import imga27 from "./../img/dayTwo/img27.jpg";
import imga28 from "./../img/dayTwo/img28.jpg";
import imga29 from "./../img/dayTwo/img29.jpg";
import imga30 from "./../img/dayTwo/img30.jpg";
import imga31 from "./../img/dayTwo/img31.jpg";
import imga32 from "./../img/dayTwo/img32.jpg";
import imga33 from "./../img/dayTwo/img33.jpg";
import imga34 from "./../img/dayTwo/img34.jpg";
import imga35 from "./../img/dayTwo/img35.jpg";
import imga36 from "./../img/dayTwo/img36.jpg";
import imga37 from "./../img/dayTwo/img37.jpg";
import imga38 from "./../img/dayTwo/img38.jpg";
import imga39 from "./../img/dayTwo/img39.jpg";
import imga40 from "./../img/dayTwo/img40.jpg";
import imga41 from "./../img/dayTwo/img41.jpg";
import imga42 from "./../img/dayTwo/img42.jpg";

// day three images
import imag1 from "./../img/dayThree/img1.jpg";
import imag2 from "./../img/dayThree/img2.jpg";
import imag3 from "./../img/dayThree/img3.jpg";
import imag4 from "./../img/dayThree/img4.jpg";
import imag5 from "./../img/dayThree/img5.jpg";
import imag6 from "./../img/dayThree/img6.jpg";
import imag7 from "./../img/dayThree/img7.jpg";
import imag8 from "./../img/dayThree/img8.jpg";
import imag9 from "./../img/dayThree/img9.jpg";
import imag10 from "./../img/dayThree/img10.jpg";
import imag11 from "./../img/dayThree/img11.jpg";
import imag12 from "./../img/dayThree/img12.jpg";
import imag13 from "./../img/dayThree/img13.jpg";
import imag14 from "./../img/dayThree/img14.jpg";
import imag15 from "./../img/dayThree/img15.jpg";
import imag16 from "./../img/dayThree/img16.jpg";
import imag17 from "./../img/dayThree/img17.jpg";
import imag18 from "./../img/dayThree/img18.jpg";
import imag19 from "./../img/dayThree/img19.jpg";
import imag20 from "./../img/dayThree/img20.jpg";
import imag21 from "./../img/dayThree/img21.jpg";

// day Four
import im1 from "./../img/dayFour/img1.jpg";
import im2 from "./../img/dayFour/img2.jpg";
import im3 from "./../img/dayFour/img3.jpg";
import im4 from "./../img/dayFour/img4.jpg";
import im5 from "./../img/dayFour/img5.jpg";
import im6 from "./../img/dayFour/img6.jpg";
import im7 from "./../img/dayFour/img7.jpg";
import im8 from "./../img/dayFour/img8.jpg";
import im9 from "./../img/dayFour/img9.jpg";
import im10 from "./../img/dayFour/img10.jpg";
import im11 from "./../img/dayFour/img11.jpg";
import im12 from "./../img/dayFour/img12.jpg";
import im13 from "./../img/dayFour/img13.jpg";
import im14 from "./../img/dayFour/img14.jpg";
import im15 from "./../img/dayFour/img15.jpg";
import im16 from "./../img/dayFour/img16.jpg";
import im17 from "./../img/dayFour/img17.jpg";
import im18 from "./../img/dayFour/img18.jpg";
import im19 from "./../img/dayFour/img19.jpg";
import im20 from "./../img/dayFour/img20.jpg";
import im21 from "./../img/dayFour/img21.jpg";
import im22 from "./../img/dayFour/img22.jpg";
import im23 from "./../img/dayFour/img23.jpg";
import im24 from "./../img/dayFour/img24.jpg";
import im25 from "./../img/dayFour/img25.jpg";
import im26 from "./../img/dayFour/img26.jpg";
import im27 from "./../img/dayFour/img27.jpg";
import im28 from "./../img/dayFour/img28.jpg";
import im29 from "./../img/dayFour/img29.jpg";
import im30 from "./../img/dayFour/img30.jpg";
import im31 from "./../img/dayFour/img31.jpg";
import im32 from "./../img/dayFour/img32.jpg";
import im33 from "./../img/dayFour/img33.jpg";
import im34 from "./../img/dayFour/img34.jpg";
import im35 from "./../img/dayFour/img35.jpg";

// day Five
import image1 from "./../img/dayFive/image1.jpg";
import image2 from "./../img/dayFive/image2.jpg";
import image3 from "./../img/dayFive/image3.jpg";
import image4 from "./../img/dayFive/image4.jpg";
import image5 from "./../img/dayFive/image5.jpg";
import image6 from "./../img/dayFive/image6.jpg";
import image7 from "./../img/dayFive/image7.jpg";
import image8 from "./../img/dayFive/image8.jpg";
import image9 from "./../img/dayFive/image9.jpg";
import image10 from "./../img/dayFive/image10.jpg";
import image11 from "./../img/dayFive/image11.jpg";
import image12 from "./../img/dayFive/image12.jpg";
import image13 from "./../img/dayFive/image13.jpg";
import image14 from "./../img/dayFive/image14.jpg";
import image15 from "./../img/dayFive/image15.jpg";
import image16 from "./../img/dayFive/image16.jpg";
import image17 from "./../img/dayFive/image17.jpg";
import image18 from "./../img/dayFive/image18.jpg";
import image19 from "./../img/dayFive/image19.jpg";
import image20 from "./../img/dayFive/image20.jpg";
import image21 from "./../img/dayFive/image21.jpg";
import image22 from "./../img/dayFive/image22.jpg";
import image23 from "./../img/dayFive/image23.jpg";
import image24 from "./../img/dayFive/image24.jpg";
import image25 from "./../img/dayFive/image25.jpg";
import image26 from "./../img/dayFive/image26.jpg";
import image27 from "./../img/dayFive/image27.jpg";
import image28 from "./../img/dayFive/image28.jpg";

const imagesDayOne = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,img11,img12,img13,img14,img15,img16,img20,img21,img22,img23,img24,img25,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36
];

const imagesDayTwo = [ imga1,  imga2,  imga3,  imga4,  imga5,  imga6,  imga7,  imga8,  imga9,  imga10, imga11, imga12, imga13, imga14, imga15, imga16,imga17,imga18,imga19, imga20, imga21, imga22, imga23, imga24, imga25, imga26,imga27, imga28, imga29, imga30, imga31, imga32, imga33, imga34, imga35, imga36, imga37, imga38, imga39, imga40, imga41, imga42
];

const imagesDayThree = [ imag1,  imag2,  imag3,  imag4,  imag5,  imag6,  imag7,  imag8,  imag9,  imag10, imag11, imag12, imag13, imag14, imag15, imag16,imag17,imag18,imag19, imag20, imag21];

const imagesDayFour = [ im1,  im2,  im3,  im4,  im5,  im6,  im7,  im8,  im9,  im10, im11, im12, im13, im14, im15, im16,im17,im18,im19, im20, im21, im22, im23, im24, im25, im26,im27, im28, im29, im30, im31, im32, im33, im34, im35];

const imagesDayFive = [ image1,  image2,  image3,  image4,  image5,  image6,  image7,  image8,  image9,  image10, image11, image12, image13, image14, image15, image16,image17,image18,image19, image20, image21, image22, image23, image24, image25, image26,image27, image28];

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
    } else if (this.props.articleTwo) {
      imagesLightBoxToLoad = imagesDayTwo;
    } else if (this.props.articleThree) {
      imagesLightBoxToLoad = imagesDayThree;
    } else if (this.props.articleFour) {
      imagesLightBoxToLoad = imagesDayFour;
     } else if (this.props.articleFive) {
      imagesLightBoxToLoad = imagesDayFive;
    }

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
            (this.props.articleFive && index === 4)
          ) {
            article = "article-content block";
          } else {
            article = "article-content";
          }

          // loading the proper array of images according to the day
          let imagesToLoad = [];
          if (index === 0) {
            imagesToLoad = imagesDayOne;
          } else if (index === 1) {
            imagesToLoad = imagesDayTwo;
          } else if (index === 2) {
            imagesToLoad = imagesDayThree;
          } else if (index === 3) {
            imagesToLoad = imagesDayFour;
          } else if (index === 4) {
            imagesToLoad = imagesDayFive;
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
