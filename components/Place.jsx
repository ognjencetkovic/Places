import React from 'react';

class Place extends React.Component {
   render() {
      return (
          <div className="col-md-6">
              <div className="row">
                  <div className="col-md-3">
                      <img className="place-logo" src={this.props.image} />
                  </div>
                  <div className="col-md-9">
                      <h3>{this.props.name}</h3>
                      <p>{this.props.description}</p>
                  </div>
              </div>
          </div>
      );
   }
}

export default Place;
