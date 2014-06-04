'use strict';

var app = angular.module('myApp.controllers', []);

// Clear Browser cache (in dev)
app.run(function($rootScope, $templateCache){
    $rootScope.$on('$viewContentLoaded', function(){
        $templateCache.removeAll();
    });
});

app.controller('MovieListCtrl', ['$scope', 'MoviesFactory', '$location',
    function($scope, MoviesFactory, $location){
        $scope.movies = MoviesFactory.query();
    }
]);
