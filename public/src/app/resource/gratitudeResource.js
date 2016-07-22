(function () {
  'use strict';

  angular
    .module('gratitude')
    .factory('gratitudeResource', gratitudeResource);

  gratitudeResource.$inject = ['$resource'];

  function gratitudeResource($resource) {
    return $resource("api/gratitudes", {}, {
      getAllGratitudes: {method: "GET", isArray: true, timeout:30000}
    });
  }

}());
