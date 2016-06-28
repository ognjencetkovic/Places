import alt from '../alt';

class AppActions {
    constructor() {
        this.generateActions(
            'getPlaces',
            'toggleFilter',
            'getFilters',
            'updateSearchWord'
        );
    }

}

export default alt.createActions(AppActions);
