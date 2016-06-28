import React from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH * 2,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '3px solid #003251',
  borderRadius: K_WIDTH / 4,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#003251',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

export default class PlaceMarker extends React.Component {
  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}
