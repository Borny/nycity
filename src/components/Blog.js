import React, { Component } from "react";
import Countdown from "./Countdown";
import Cards from "./Cards";
import Article from "./Article";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      cardsHide: false,
      articleShow: false,

      articleOne: false,
      articleTwo: false,
      articleThree: false,
      articleFour: false,
      articleFive: false,
      articleSix: false,
      articleSeven: false
    };
  }

  articlesOpenHandler = e => {
    console.log(e.target.id);

    if (e.target.id === "img0") {
      this.setState(prevState => {
        return {
          articleOne: true,
          cardsHide: !prevState.cardsHide,
          articleShow: !prevState.articleShow
        };
      });
    } else if (e.target.id === "img1") {
      this.setState(prevState => {
        return {
          articleTwo: true,
          cardsHide: !prevState.cardsHide,
          articleShow: !prevState.articleShow
        };
      });
    } else if (e.target.id === "img2") {
      this.setState(prevState => {
        return {
          articleThree: true,
          cardsHide: !prevState.cardsHide,
          articleShow: !prevState.articleShow
        };
      });
    } else if (e.target.id === "img3") {
      this.setState(prevState => {
        return {
          articleFour: true,
          cardsHide: !prevState.cardsHide,
          articleShow: !prevState.articleShow
        };
      });
    } else if (e.target.id === "img4") {
      this.setState(() => {
        return {
          articleFive: true
        };
      });
    } else if (e.target.id === "img5") {
      this.setState(() => {
        return {
          articleSix: true
        };
      });
    } else if (e.target.id === "img6") {
      this.setState(() => {
        return {
          articleSeven: true
        };
      });
    }

    this.setState(prevState => {
      return {};
    });
  };

  closeArticleHandler = prevState => {
    this.setState({
      cardsHide: false,
      articleShow: false,
      articleOne: false,
      articleTwo: false,
      articleThree: false,
      articleFour: false,
      articleFive: false,
      articleSix: false,
      articleSeven: false
    });
  };

  render() {
    // sets a default class for the home component
    let blogClasses = "blog";
    if (this.props.open) {
      blogClasses = "blog open";
    }

    return (
      <div className={blogClasses}>
        <header className="header">
          <h1>
            {/* New York City
            <br />
            October 2018 */}
          </h1>
          <button
            className="btn btn-tertiary btn-comment"
            onClick={this.props.commentClickHandler}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25">
              <path
                fill="#FFF"
                d="M26 0H4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3v6.766L12.5 18H26a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z"
              />
            </svg>
          </button>
        </header>

        <Countdown />

        <Article
          hideClick={this.closeArticleHandler}
          show={this.state.articleShow}
          articleOne={this.state.articleOne}
          articleTwo={this.state.articleTwo}
          articleThree={this.state.articleThree}
          articleFour={this.state.articleFour}
          articleFive={this.state.articleFive}
          articleSix={this.state.articleSix}
          articleSeven={this.state.articleSeven}
        />
        <main className="main">
          <Cards
            hideClick={this.articlesOpenHandler}
            hide={this.state.cardsHide}
          />
        </main>
      </div>
    );
  }
}

export default Blog;
