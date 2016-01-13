(function () {

  function pageHeader() {
    return {
      templateUrl: 'directives/header/header.html'
    }
  }

  angular.module('ng.camp')
    .directive('pageHeader', pageHeader);

}());
