'use strict';

describe('Service: movieService', function () {

  // load the service's module
  beforeEach(module('publicApp.services'));

  // instantiate service
  var movieService;
  beforeEach(inject(function (_MovieFactory_) {
    movieService = _MovieFactory_;
  }));

  it('should do something', function () {
    expect(!!movieService).toBe(true);
  });

});