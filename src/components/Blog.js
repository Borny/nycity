import React, { Component } from "react";
import Cards from "./Cards";
import Article from "./Article";

import timesquare from "../img/timesquare.jpg";
import statue from "../img/statue.jpeg";
import central from "../img/central.jpg";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      cardsHide: false,
      articleShow: false
    };
  }

  articlesToggleHandler = () => {
    this.setState(prevState => {
      return {
        cardsHide: !prevState.cardsHide,
        articleShow: !prevState.articleShow
      };
    });
  };

  render() {
    const cards = [
      [statue, "day one", "the new world"],
      [timesquare, "day two", "blabla"],
      [central, "day 3", "baldksfj"],
      [statue, "day one", "the new world"],
      [timesquare, "day two", "blabla"],
      [central, "day 3", "baldksfj"]
    ];

    // sets a default class for the home component
    let blogClasses = "blog";
    if (this.props.open) {
      blogClasses = "blog open";
    }

    return (
      <div className={blogClasses}>
        <header className="header">
          <h1>
            New York City
            <br />
            October 2018
          </h1>
          <button
            className="btn btn-comment"
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
        <Article
            cards={cards}
            hideClick={this.articlesToggleHandler}
            show={this.state.articleShow}
            />
        <main className="main">
          <Cards
            cards={cards}
            hideClick={this.articlesToggleHandler}
            hide={this.state.cardsHide}
          />
        </main>
      </div>
    );
  }
}

export default Blog;
