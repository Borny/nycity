import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app


import img1 from "./../img/dayOne/imgOne.jpg";
import img2 from "./../img/dayOne/imgTwo.jpg";
import img3 from "./../img/dayOne/imgThree.jpg";
import img4 from "./../img/dayOne/imgFour.jpg";
import img5 from "./../img/dayOne/imgFive.jpg";
import img6 from "./../img/dayOne/imgSix.jpg";


const images = [

    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];




export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}