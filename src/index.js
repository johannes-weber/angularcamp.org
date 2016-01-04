// import assets and globals
import 'font-awesome-webpack';
import 'assets/css/main.css';
import 'expose?jQuery!assets/js/jquery.min';
import 'assets/js/jquery.scrollex.min';
import 'expose?skel!assets/js/skel.min';
import 'assets/js/util';
import 'assets/js/main';

// import angular and 3rd party modules
import angular from 'angular';
import router  from 'angular-ui-router';

// import application module
import states from 'states/states.module';

// main module creation
angular.module('angularCamp', [
  'ui.router',
   states.name
]);

// run forest, run!
angular.element(document).ready(() => angular.bootstrap(document, ['angularCamp']));
