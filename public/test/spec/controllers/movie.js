'use strict';

describe('Controller: MovieListCtrl', function () {

  // load the controller's module
  // beforeEach(module('publicApp.controllers'));

  var MovieListCtrl,
    scope;

    beforeEach(module('publicApp.controllers', function($provide){
        var MoviesFactory = {
            query: function(){}
        };

        spyOn(MoviesFactory, 'query').andReturn('foo');
        $provide.value('MoviesFactory', MoviesFactory);

        var MovieFactory = {
            delete: function(){}
        };
        spyOn(MovieFactory, 'delete').andReturn('foo');
        $provide.value('MovieFactory', MovieFactory);

    }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, MoviesFactory, MovieFactory) {
    scope = $rootScope.$new();
    MovieListCtrl = $controller('MovieListCtrl', {
      $scope: scope,
      MoviesFactory: MoviesFactory,
      MovieFactory: MovieFactory
    });
  }));

  it('should attach a list movies to the scope', function () {
    expect(scope.movies).toBe('foo');
  });
});
