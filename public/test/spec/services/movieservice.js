'use strict';

describe('Service: movieService', function () {

  // load the service's module
  beforeEach(module('publicApp.services'));

  // instantiate service
  var movieService;
  var moviesService;
  beforeEach(inject(function (_MovieFactory_, _MoviesFactory_) {
    movieService = _MovieFactory_;
    moviesService = _MoviesFactory_;
  }));

  describe("MovieFactory", function(){

    it('should do something', function () {
      expect(!!movieService).toBe(true);
    });
    // show
    // update
    // delete

  });

  describe("MoviesFactory", function(){

    it('should do something', function () {
      expect(!!moviesService).toBe(true);
    });

    // query
    // create
  });



});
