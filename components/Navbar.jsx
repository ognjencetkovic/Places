import React from 'react';
import SearchBox from './SearchBox.jsx'

class Navbar extends React.Component {
   render() {
      return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Places</a>
              </div>
              <SearchBox />
            </div>
          </nav>
      );
   }
}

export default Navbar;
