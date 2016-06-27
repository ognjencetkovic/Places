import React from 'react';
import Place from './Place.jsx';

var places = [ { "id":1, "name":"Food1", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":{ "id":1, "name":"Food"}, "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":2, "name":"Food2", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":{ "id":1, "name":"Food"}, "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":3, "name":"Food3", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":{ "id":1, "name":"Food"}, "location":{"lat": 43.850, "lng": 18.390}}];

class PlaceList extends React.Component {

    constructor() {
          super();

          this.state = {
             data: places
          }
       }

   render() {
      return (
          <div className="row">
              {this.state.data.map(place => <Place name={place.name} image={place.image} description={place.description}></Place>)}
          </div>
      );
   }
}

export default PlaceList;
