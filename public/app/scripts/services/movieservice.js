'use strict';

/**
 * @ngdoc service
 * @name publicApp.movieService
 * @description
 * # movieService
 * Service in the publicApp.
 */
var services = angular.module('publicApp.services',['ngResource']);

services.service('MoviesFactory', ['$resource',
    function($resource) {
        return $resource('/api/movies', {}, {
            query: { method:'GET', isArray: true},
            create: {method: 'POST'}
        });
}]);

services.service('movieService', ['$resource',
    function($resource) {
        return $resource('/api/movies/:id', {}, {
            show: {method: 'GET'},
            update: {method: 'PUT', params: {id: '@id'}},
            delete: {method: 'DELETE', params: {id: '@id'}}
        });
}]);
