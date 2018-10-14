import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="header">
          <h1>
            New York City
            <br />
            October 2018
          </h1>
          <button className="btn btn-comment">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25"><path fill="#FFF" d="M26 0H4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3v6.766L12.5 18H26a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z"/></svg>
          </button>
        </header>
      </div>
    );
  }
}

export default Home;
