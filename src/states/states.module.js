import {HomeController} from './home/home';
import {CocController}  from './coc/coc';

// define application module
function routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeController',
      templateUrl: 'states/home/home.html'
    })
    .state('coc', {
      url: '/coc',
      controller: 'CocController',
      templateUrl: 'states/coc/coc.html'
    });
}

export default angular.module('angularCamp.states', [])
  .config(routes)
  .controller({HomeController, CocController});
