import React, { Component } from 'react';
import Home from './components/Home';
import Comments from './components/Comments';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messagesList: [],
      user: null,
      commentOpen : false
    };
  }

  // toggles the comment section
  commentToggleHandler = () => {
    this.setState((prevState) => {
      return {commentOpen : !prevState.commentOpen}
    });
  }

  // closes the comment section
  commentCloseHandler = () => {
    this.setState({commentOpen : false})
  }

  render() {

    return (
      <div className="App">
      <Home commentClickHandler={this.commentToggleHandler} open={this.state.commentOpen}/>
      <Comments open={this.state.commentOpen} close={this.commentCloseHandler}/>
      </div>
    );
  }
}

export default App;
