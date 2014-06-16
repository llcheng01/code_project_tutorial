'use strict';

/* Services */

var services = angular.module('myApp.services', ['ngResource']);

services.factory('MoviesFactory', ['$resource',
    function($resource) {
        return $resource('/api/movies', {}, {
            query: { method:'GET', isArray: true},
            create: {method: 'POST'}
        });
}]);

services.factory('MovieFactory', ['$resource',
    function($resource) {
        return $resource('/api/movies/:id', {}, {
            show: {method: 'GET'},
            update: {method: 'PUT', params: {id: '@id'}},
            delete: {method: 'DELETE', params: {id: '@id'}}
        });

}]);
