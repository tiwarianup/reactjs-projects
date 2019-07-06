import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class CountDown extends Component {

  constructor(props){
    super(props);

    this.state = {}

    this.timeObject = {
      'Days':'23',
      'Hs': '14',
      'Mins': '57',
      'Sec': '32'
    }

    this.keys = Object.keys(this.timeObject);
  }

  renderCountDown = (timeObject, keys) => {
    return (
      keys.map( (item, index) => {
        return (
          <div key={index}>
            <div className="countdown_item">
              <div className="countdown_time">
                {timeObject[item]}
            </div>
              <div className="countdown_tag">
                {item}
            </div>
            </div>
          </div>
        )
      })
    )
  }


  render() {
    return (
      <Slide left delay={500}>
        <div className="countdown_wrapper">
          
            <div className="countdown_top">
              Event Starts In
            </div>

            <div className="countdown_bottom">
                {this.renderCountDown(this.timeObject, this.keys)}
            </div>
        </div>
      
      </Slide >
    );
  }
}

export default CountDown;