import React from 'react';
import Navbar from './components/Navbar.jsx';
import InteractiveMap from './components/InteractiveMap.jsx';
import Filters from './components/Filters.jsx';
import PlaceList from './components/PlaceList.jsx';

class App extends React.Component {

    constructor() {
          super();
       }

   render() {
      return (
         <div>
            <Navbar />
            <div className="row">
                <div id="map" className="col-md-6">
                    <InteractiveMap />
                </div>
                <div className="col-md-6">
                    <Filters  />
                    <PlaceList />
                </div>
            </div>
         </div>
      );
   }
}

export default App;
