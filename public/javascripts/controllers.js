'use strict';

var app = angular.module('myApp.controllers', []);

// Clear Browser cache (in dev)
app.run(function($rootScope, $templateCache){
    $rootScope.$on('$viewContentLoaded', function(){
        $templateCache.removeAll();
    });
});

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
            $location.path('partials/movie-list');
        };

        // callback for ng-click 'cancel'
        $scope.cancel = function(){
            $location.path('partials/movie-list');
        };
        $scope.movie = MovieFactory.show({id: $routeParams.id});
    }
]);

app.controller('MovieCreateCtrl', ['$scope', 'MoviesFactory', '$location',
    function($scope, MoviesFactory, $location) {
        // callback for ng-click 'createMovie'
        $scope.createMovie = function() {
            MoviesFactory.create($scope.movie);
            $location.path('partials/movie-list');
        };

    }
]);
