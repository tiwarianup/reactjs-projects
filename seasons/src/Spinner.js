import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.loaderText}</div>
        </div>
    );
}

Spinner.defaultProps = {
    loaderText: 'Loading....'
  };

export default Spinner;