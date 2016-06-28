import alt from '../alt';
import AppActions from '../actions/AppActions';
import fuzzy from 'fuzzy';

var categories = [ { "id":1, "name":"Food", "active":true},
                            { "id":2, "name":"Clubs", "active":false},
                            { "id":3, "name":"Bars", "active":false}];

var places = [ { "id":1, "name":"Food1", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[0], "location":{"lat": 43.810, "lng": 18.390}},
                            { "id":2, "name":"Food2", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[0], "location":{"lat": 43.850, "lng": 18.350}},
                            { "id":3, "name":"Food3", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[0], "location":{"lat": 43.840, "lng": 18.410}},
                            { "id":4, "name":"Club1", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[1], "location":{"lat": 43.870, "lng": 18.380}},
                            { "id":5, "name":"Club2", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[1], "location":{"lat": 43.820, "lng": 18.400}},
                            { "id":6, "name":"Bar1", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[2], "location":{"lat": 43.830, "lng": 18.360}},
                            { "id":7, "name":"Bar2", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[2], "location":{"lat": 43.860, "lng": 18.370}}];

class AppStore {
    constructor() {
        this.bindActions(AppActions);
        this.categories =[];
        this.places =[];
        this.filteredPlaces = [];
        this.activePlaces = [];
        this.searchWord = "";
    }

    onGetFilters() {
        this.categories = categories;
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

    onGetPlaces() {
        this.places = places;
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
