import alt from '../alt';
import AppActions from '../actions/AppActions';

var categories = [ { "id":1, "name":"Food", "active":true},
                            { "id":2, "name":"Clubs", "active":false},
                            { "id":3, "name":"Bars", "active":false}];

var places = [ { "id":1, "name":"Food1", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[0], "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":2, "name":"Food2", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[0], "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":3, "name":"Food3", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[0], "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":4, "name":"Club1", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[1], "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":5, "name":"Club2", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[1], "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":6, "name":"Bar1", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[2], "location":{"lat": 43.850, "lng": 18.390}},
                            { "id":7, "name":"Bar2", "description":"test description", "image":"http://media.vector4free.com/normal/free-vector-bar-logo.jpg", "category":categories[2], "location":{"lat": 43.850, "lng": 18.390}}];

class AppStore {
    constructor() {
        this.bindActions(AppActions);
        this.categories =[];
        this.places =[];
        this.activePlaces = [];
    }

    onGetFilters() {
        console.log("in onGetFiltersSuccess");
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
    }

    onGetPlaces() {
        this.places = places;
        let tmp = [];
        this.places.forEach(function(place){
            if (place.category.active){
                tmp.push(place);
            }
        });
        this.activePlaces = tmp;
    }

}

export default alt.createStore(AppStore);
