import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';


class Carousal extends React.Component {

  constructor(props){
    super(props);

    this.carousalSetting = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    this.images = [slide_one, slide_two, slide_three];
  }

renderImages = (images) => {
  return (
    images.map((image, index) => {
      return (
        <div key={`${index}`}>
          <div
            className="carrousel_image"
            style={{
              background: `url(${image})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      );
    })
  );
}


render(){
  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: 'hidden',
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...this.carousalSetting}>
        {this.renderImages(this.images)}
      </Slider>
    </div>
  );
}
}

export default Carousal;