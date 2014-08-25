'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the publicApp
 */
var app = angular.module('publicApp.controllers', []);

app.controller('MovieListCtrl', ['$scope', 'MoviesFactory', 'MovieFactory', '$location',
    function($scope, MoviesFactory, MovieFactory, $location){
        // callback for ng-click 'editMovie'
        $scope.editMovie = function(movieId) {
            $location.path('/movie-detail/' + movieId);
        };

        // callback for ng-click 'deleteMovie'
        $scope.deleteMovie = function(movieId) {
            MovieFactory.delete({id: movieId});
            $scope.movies = MoviesFactory.query();
        };

        // callback for ng-click 'createMovie'
        $scope.createMovie = function() {
            $location.path('/movie-create');
        };

        $scope.movies = MoviesFactory.query();
    }
]);

app.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'MovieFactory', '$location',
    function($scope, $routeParams, MovieFactory, $location) {
        // callback for ng-click 'updateMovie'
        $scope.updateMovie = function() {
            MovieFactory.update($scope.movie);
            $location.path('/movie-list');
        };

        // callback for ng-click 'cancel'
        $scope.cancel = function(){
            $location.path('/movie-list');
        };
        $scope.movie = MovieFactory.show({id: $routeParams.id});
    }]);
app.controller('MovieCreateCtrl', ['$scope', 'MoviesFactory', '$location',
    function($scope, MoviesFactory, $location) {
        // callback for ng-click 'createMovie'
        $scope.createMovie = function() {
            MoviesFactory.create($scope.movie);
            $location.path('/movie-list');
        };

    }
]);
