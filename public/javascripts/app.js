var app = angular.module('myApp', ['ngRoute','myApp.services','myApp.controllers']).
    config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {templateUrl: 'partials/movie-list', controller: 'MovieListCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
}]);

//app.controller('MyCtrl', function($scope, $http){
//    // a scope function to load the data
//    $scope.loadData = function(){
//        $http.get('/api/movies').success(function(data){
//            $scope.items = data;
//        });
//    };
//    $scope.items = [
//        {'id': '001', 'title': 'William Copeland'},
//        {'id': '002', 'title': 'Shane Koyczan'}
//    ];
//});
