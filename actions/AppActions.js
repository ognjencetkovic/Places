import alt from '../alt';

class AppActions {
    constructor() {
        this.generateActions(
            'getPlaces',
            'toggleFilter',
            'getFilters'
        );
    }

}

export default alt.createActions(AppActions);
