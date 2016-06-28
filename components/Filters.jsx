import React from 'react';
import AppActions from '../actions/AppActions.js';
import AppStore from '../stores/AppStore.js';

class Filters extends React.Component {

    constructor() {
          super();
          this.state = AppStore.getState();
          this.setFilter = this.setFilter.bind(this);
          this.onChange = this.onChange.bind(this);
       }

       componentDidMount() {
           AppStore.listen(this.onChange);
           AppActions.getFilters();
        }

        onChange(state) {
            this.setState(state);
          }

       setFilter(category){
           AppActions.toggleFilter(category);
      }

   render() {
      return (
          <div className="btn-group" role="group">
              {this.state.categories.map(category => <button key={category.id} type="button" className={category.active ? 'btn btn-primary' : 'btn btn-default'} onClick={this.setFilter.bind(null, category)}>{category.name}</button>)}
         </div>
      );
   }
}

export default Filters;
