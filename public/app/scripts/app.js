'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'publicApp.services',
    'publicApp.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
        templateUrl: 'views/movie-list.html',
        controller: 'MovieListCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movie-detail/:id', {
        templateUrl: 'views/movie-detail.html',
        controller: 'MovieDetailCtrl'
      })
      .when('/movie-create', {
        templateUrl: 'views/movie-create.html',
        controller: 'MovieCreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
