import React, { Component } from "react";
import Cards from "./Cards";
import Article from "./Article";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      cardsHide: false,
      articleShow: false,

      articleOne: false
    };
  }

  articlesToggleHandler = (e) => {
    console.log(e.target.id)

    if(e.target.id === "img0"){
      console.log(this.state.articleOne)
      this.setState(prevState =>{
        return{
            articleOne : !prevState.articleOne
          }
        }
      )
    }
    this.setState(prevState => {
      return {
        cardsHide: !prevState.cardsHide,
        articleShow: !prevState.articleShow
            };
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
            hideClick={this.articlesToggleHandler}
            show={this.state.articleShow}
            one={this.state.articleOne}
            />
        <main className="main">
          <Cards
            hideClick={this.articlesToggleHandler}
            hide={this.state.cardsHide}
          />
        </main>
      </div>
    );
  }
}

export default Blog;
