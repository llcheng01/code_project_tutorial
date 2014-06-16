var app = angular.module('myApp', ['ngRoute','myApp.services','myApp.controllers']).
    config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {templateUrl: 'partials/movie-list', controller: 'MovieListCtrl'});
        $routeProvider.when('/movie-detail/:id', {templateUrl: 'partials/movie-detail', controller: 'MovieDetailCtrl'});
        $routeProvider.when('/movie-create', {templateUrl: 'partials/movie-create', controller: 'MovieCreateCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
}]);

