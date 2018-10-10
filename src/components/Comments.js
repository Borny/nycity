import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <h2>Comments</h2>
        <footer className="footer">
          <form>
            <input type="text" ref="comment"/>
            <input type="submit" />
          </form>

        </footer>
      </div>
    );
  }
}

export default Comments;
