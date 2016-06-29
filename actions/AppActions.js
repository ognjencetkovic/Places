import alt from '../alt';

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

class AppActions {
    
    constructor() {
        this.generateActions(
            'setPlaces',
            'toggleFilter',
            'setFilters',
            'updateSearchWord',
            'callStore'
        );
    }

    getFilters() {
        this.setFilters(categories);
    }

    getPlaces() {
        this.setPlaces(places);
    }

}

export default alt.createActions(AppActions);
