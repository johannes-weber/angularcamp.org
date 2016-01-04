import {HomeController} from './home/home';

// define application module
function routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      templateUrl: 'states/home/home.html'
    });
}

export default angular.module('angularCamp.states', [])
  .config(routes)
  .controller({HomeController});
