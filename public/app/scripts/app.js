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
        templateUrl: 'partials/movie-detail',
        controller: 'MovieDetailCtrl'
      })
      .when('/movie-create', {
        templateUrl: 'partials/movie-create',
        controller: 'MovieCreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
