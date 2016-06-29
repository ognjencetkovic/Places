import alt from '../alt';
import AppActions from '../actions/AppActions';
import fuzzy from 'fuzzy';

class AppStore {
    constructor() {
        this.bindActions(AppActions);
        this.categories =[];
        this.places =[];
        this.filteredPlaces = [];
        this.activePlaces = [];
        this.searchWord = "";
    }

    onSetFilters(data) {
        this.categories = data;
    }

    onToggleFilter(category) {
        category.active = !category.active;
        let tmp = [];
        this.places.forEach(function(place){
            if (place.category.active){
                tmp.push(place);
            }
        });
        this.activePlaces = tmp;
        this.filteredPlaces = tmp;
    }

    onSetPlaces(data) {
        this.places = data;
        let tmp = [];
        this.places.forEach(function(place){
            if (place.category.active){
                return tmp.push(place);
            }
        });
        this.activePlaces = tmp;
        this.filteredPlaces = tmp;
    }

    onUpdateSearchWord(searchWord) {
        this.searchWord = searchWord;
        var options = { extract: function(el) { return el.name; }};
        var results = fuzzy.filter(this.searchWord, this.filteredPlaces, options);
        this.activePlaces = results.map(function(el) { return el.original; });
    }

}

export default alt.createStore(AppStore);
