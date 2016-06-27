import React from 'react';

class SearchBox extends React.Component {
   render() {
      return (
          <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
          </form>
      );
   }
}

export default SearchBox;
