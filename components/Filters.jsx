import React from 'react';

var categories = [ { "id":1, "name":"Food"},
                            { "id":2, "name":"Clubs"},
                            { "id":3, "name":"Bars"}];


class Filters extends React.Component {

    constructor() {
          super();

          this.state = {
             data: categories
          }
       }

   render() {
      return (
          <div className="btn-group" role="group">
              {this.state.data.map(category => <button key={category.id} type="button" className="btn btn-default">{category.name}</button>)}
         </div>
      );
   }
}

export default Filters;
