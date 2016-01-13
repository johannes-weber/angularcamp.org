(function () {

  function banner() {
    return {
      templateUrl: 'directives/banner/banner.html'
    }
  }

  angular.module('ng.camp')
    .directive('banner', banner)

}());

