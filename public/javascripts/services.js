'use strict';

/* Services */

var services = angular.module('myApp.services', ['ngResource']);

services.factory('MoviesFactory', function($resource) {
    return $resource('/api/movies', {}, {
        query: { method:'GET', isArray: true}
    })
});
