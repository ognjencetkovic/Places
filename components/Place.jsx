import React from 'react';

class Place extends React.Component {
   render() {
      return (
          <div className="col-md-6 col-sm-12">
              <div className="row place-wrapper">
                  <div className="col-md-3 col-sm-6 col-xs-12 img-wrapper">
                      <img className="place-logo" src={this.props.image} />
                  </div>
                  <div className="col-md-9 col-sm-6 col-xs-12">
                      <h3>{this.props.name}</h3>
                      <p>{this.props.description}</p>
                  </div>
              </div>
          </div>
      );
   }
}

export default Place;
