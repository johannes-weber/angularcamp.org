import 'font-awesome-webpack';
import 'assets/css/main.css';
import 'expose?jQuery!assets/js/jquery.min';
import 'assets/js/jquery.scrollex.min';
import 'expose?skel!assets/js/skel.min';
import 'assets/js/util';
import 'assets/js/main';

import angular from 'angular';
import router  from 'angular-ui-router';

// import states controllers
import {HomeController} from 'states/home/home';

function routesConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url:'/home',
      controller: 'HomeController',
      templateUrl: 'states/home/home.html'
    });
}

// module configuration
angular.module('angular.camp', ['ui.router'])
  .config(routesConfig)
  .controller('HomeController', HomeController);

// run forest, run!
angular.element(document).ready(function(){
  angular.bootstrap(document, ['angular.camp']);
});
