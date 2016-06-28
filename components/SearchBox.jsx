import React from 'react';
import AppActions from '../actions/AppActions.js';
import AppStore from '../stores/AppStore.js';

class SearchBox extends React.Component {

        constructor() {
              super();
              this.state = AppStore.getState();
              this.onChange = this.onChange.bind(this);
              this.updateState = this.updateState.bind(this);
           }

           componentDidMount() {
               AppStore.listen(this.onChange);
            }

            onChange(state) {
                this.setState(state);
              }

updateState(e) {
     AppActions.updateSearchWord(e.target.value);
}

   render() {
      return (
          <div className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" value={this.state.searchWord} className="form-control" onChange = {this.updateState} placeholder="Search" />
              </div>
          </div>
      );
   }
}

export default SearchBox;
