import React from 'react';
import Place from './Place.jsx';
import AppActions from '../actions/AppActions.js';
import AppStore from '../stores/AppStore.js';

class PlaceList extends React.Component {

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
          <div className="row">
              {this.state.activePlaces.map(place => <Place key={place.id} name={place.name} image={place.image} description={place.description} />)}
          </div>
      );
   }
}

export default PlaceList;
