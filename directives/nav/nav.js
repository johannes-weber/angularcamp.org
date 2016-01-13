(function () {

  function navbar(){
    return {
      templateUrl: 'directives/nav/nav.html'
    }
  }

  angular.module('ng.camp')
    .directive('navbar', navbar)

}()); 

