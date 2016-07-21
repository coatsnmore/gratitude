(function(angular) {
  'use strict';
function HeroDetailController() {

}

angular.module('gratitude').component('heroDetail', {
  templateUrl: 'components/hero/heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '='
  }
});
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
