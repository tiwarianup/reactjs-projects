import React from 'react';
import Carousal from './Carousal';
import CountDown from './CountDown';

const Featured = () => {
  return (
    <div style={{position:'relative'}}>

      <Carousal />

      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>

      <CountDown/>

    </div>
  );
};

export default Featured;