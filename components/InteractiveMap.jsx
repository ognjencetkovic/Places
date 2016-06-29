import React from 'react';
import AppActions from '../actions/AppActions.js';
import AppStore from '../stores/AppStore.js';
import GoogleMap from 'google-map-react';
import PlaceMarker from './PlaceMarker.jsx';

class InteractiveMap extends React.Component {

    constructor() {
          super();
          this.state = AppStore.getState();
          this.onChange = this.onChange.bind(this);
       }

       componentDidMount() {
           AppStore.listen(this.onChange);
           AppActions.getPlaces();
        }

        onChange(state) {
            this.setState(state);
          }


   render() {
      return (
          <GoogleMap
               bootstrapURLKeys={{key: "AIzaSyBp5SOgFeJWBkvO1RqAKeg9TjmvGiw_b_Y" }}
               center={{lat: 43.850, lng: 18.390}}
               zoom={13}>
               {this.state.activePlaces.map(place => <PlaceMarker key={place.id} lat={place.location.lat} lng={place.location.lng} text={place.name} />)}
           </GoogleMap>
      );
   }
}

export default InteractiveMap;
